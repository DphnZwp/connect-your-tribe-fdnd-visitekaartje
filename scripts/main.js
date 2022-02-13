const memberId = 13;
const baseUrl = 'https://tribe.api.fdnd.nl/v1'
const nameEl = document.getElementById('name')
const bioEl = document.getElementById('bio')

postAndRenderData()

fetch("https://tribe.api.fdnd.nl/v1/member")
.then(response =>
	response.json()
)
.then(data =>
	findStudent(data.data)
)

function findStudent(data) {
	data.forEach(element => {
		if(element.memberId == memberId) {
			const daphne = element;
			nameEl.innerText = `Hallo, ik ben ${daphne.name}`
			bioEl.innerText = `${daphne.bio}`
		}
	});
}

function postAndRenderData () {
	// 1. all bindings in the local scope for this function
	const url = `${baseUrl}/member`
	const options = {
		method: 'PATCH',
		headers: {
				'Content-Type': 'application/json',
		},
		body: JSON.stringify({
				memberId: 13,
				squadId: 1,
				type: "student",
				nickname: "",
				name: "Daphne",
				prefix: "",
				surname: "Zwuup",
				avatar: "https://user-images.githubusercontent.com/69635977/153752766-49ef18d8-0936-436d-aa80-1dd946301f4d.png",
				githubHandle: "https://github.com/DphnZwp",
				bio: "Mijn hobby is digitaal tekenen. Ik zit nu in het eerste jaar van de opleiding Frontend Design & Development en ik maak daar met veel plezier websites.",
				url: "\r"
		})
	}
	
	// 2. The logic
	fetch(url,options).then(response => response.json())
	.then(data => {
			console.log(data)
	}).catch(err => {
			console.log(err)
	})
}