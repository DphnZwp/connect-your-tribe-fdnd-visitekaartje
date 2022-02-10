const memberId = 13;
const baseUrl = 'https://tribe.api.fdnd.nl/v1'
const nameEl = document.getElementById('name')
// const bioEl = document.getElementById('bio')

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
		}
	});
}

function postAndRenderData () {
    // 1. all bindings in the local scope for this function
    const url = `${baseUrl}/member`
    const options = {
			method: 'POST',
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
					avatar: "",
					githubHandle: "",
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