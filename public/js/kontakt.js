const imeDOM = document.getElementById("ime");
const jmbgDOM = document.getElementById("jmbg");
const adresaDOM = document.getElementById("adresa");
const telefonDOM = document.getElementById("telefon");
const emailDOM = document.getElementById("email");
const prijava = document.getElementById("prijava");

async function Prijava()
{
	try {
		prijava.disabled = true;
		const response = await fetch("/prijava", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				ime: imeDOM.value,
				jmbg: jmbgDOM.value,
				adresa: adresaDOM.value,
				telefon: telefonDOM.value,
				email: emailDOM.value
			})
		})
		const data = await response.json();
		if(data.ok) {
			alert("Uspešna prijava");
		}
		else throw new Error(data.message);
	} 
	catch (error) {
		console.error(error);
		alert(error.message);
	}
	finally {
		prijava.disabled = false;
	}
}

function Submit()
{
	Prijava();
	return false;
}