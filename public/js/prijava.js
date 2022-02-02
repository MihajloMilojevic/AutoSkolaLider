const imeDOM = document.getElementById("ime");
const jmbgDOM = document.getElementById("jmbg");
const adresaDOM = document.getElementById("adresa");
const telefonDOM = document.getElementById("telefon");
const emailDOM = document.getElementById("email");
const prijavaDOM = document.getElementById("prijava");
const porukaDOM = document.getElementById("poruka");

const upsehColor = "lightgreen";
const errorColor = "var(--fg)";

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
			Poruka("Uspešna prijava", upsehColor);
		}
		else throw new Error(data.message);
	} 
	catch (error) {
		console.error(error);
		Poruka(error.message, errorColor);
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
	console.log(element.value.trim());
	if(element.value)
		element.style.borderColor = upsehColor;
	else
		element.style.borderColor = errorColor;
}

imeDOM.addEventListener("input", (e) => {
	imeDOM.value = imeDOM.value.trim()
	Obavezno(e);
	if((/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~1-9]/).test(imeDOM.value))
		imeDOM.style.borderColor = errorColor;
})
jmbgDOM.addEventListener("input", e => {
	jmbgDOM.value = jmbgDOM.value.trim()
	Obavezno(e);
	if(jmbgDOM.value.length != 13 || !(/^\d+$/).test(jmbgDOM.value))
		jmbgDOM.style.borderColor = errorColor;
})
adresaDOM.addEventListener("input", Obavezno)
telefonDOM.addEventListener("input", e => {
	telefonDOM.value = telefonDOM.value.trim()
	Obavezno(e);
	if(!(/^\d+$/).test(telefonDOM.value))
		telefonDOM.style.borderColor = errorColor;
})
emailDOM.addEventListener("input", e => {
	Obavezno(e);
	if(!(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i).test(emailDOM.value))
		emailDOM.style.borderColor = errorColor;
})