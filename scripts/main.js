const memberId = 13;
const baseUrl = 'https://tribe.api.fdnd.nl/v1'
const nameEl = document.getElementById('name')
const bioEl = document.getElementById('bio')

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