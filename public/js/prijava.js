const imeDOM = document.getElementById("ime");
const jmbgDOM = document.getElementById("jmbg");
const adresaDOM = document.getElementById("adresa");
const telefonDOM = document.getElementById("telefon");
const emailDOM = document.getElementById("email");
const prijavaDOM = document.getElementById("prijava");
const porukaDOM = document.getElementById("poruka");

async function Prijava()
{
	try {
		prijavaDOM.disabled = true;
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
			Poruka("Uspešna prijava", "green");
		}
		else throw new Error(data.message);
	} 
	catch (error) {
		console.error(error);
		Poruka(error.message, "var(--fg)");
	}
	finally {
		prijavaDOM.disabled = false;
	}
}

function Poruka(poruka, boja)
{
	porukaDOM.innerText = poruka;
	porukaDOM.classList.add("poruka-prikaz");
	porukaDOM.style.color = boja;
}

function Submit()
{
	Prijava();
	return false;
}

function Obavezno(e) {
	const element = e.currentTarget;
	console.log(element.value);
	if(element.value)
		element.style.borderColor = "green";
	else
		element.style.borderColor = "var(--fg)";
}

imeDOM.addEventListener("input", Obavezno)
jmbgDOM.addEventListener("input", Obavezno)
adresaDOM.addEventListener("input", Obavezno)
telefonDOM.addEventListener("input", Obavezno)
emailDOM.addEventListener("input", Obavezno)