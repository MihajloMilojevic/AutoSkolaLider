async function wakeServer() {
	try {
		await fetch("https://liderdb036.herokuapp.com/wake")
		console.log("Server probuđen");
	} catch (error) {
		console.log("Server nije probuđen");
	}
}
wakeServer();