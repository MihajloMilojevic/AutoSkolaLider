const emailDOM = document.getElementById("email");

async function Prijava()
{
	try {
		const response = await fetch("/prijava", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({email: emailDOM.value})
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
}

function Submit()
{
	Prijava();
	return false;
}