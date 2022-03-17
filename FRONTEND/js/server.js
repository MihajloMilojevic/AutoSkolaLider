async function wakeServer() {
	try {
		await fetch("https://liderdb036.herokuapp.com/")
		console.log("Server probuđen");
	} catch (error) {
		console.log("Server nije probuđen");
	}
}
wakeServer();