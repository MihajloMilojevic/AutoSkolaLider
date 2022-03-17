const path = require("path");
const fs = require('fs');

const sendImage = async (req, res) => {
	const {name} = req.params;
	const root = path.join(__dirname, "..", "gallery");
	// console.log(root);

	res.sendFile(name, {root});
}

module.exports = sendImage;