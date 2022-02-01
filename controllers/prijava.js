require("dotenv").config();
const sgMail = require("@sendgrid/mail");

const prijava = async (req, res) => {

	sgMail.setApiKey(process.env.SENDGRID_API_KEY)
	const msg = {
		to: req.body.email, // Change to your recipient
		from: "Mihajlo Milojević <milojevicm374@gmail.com>", // Change to your verified sender
		subject: "LIDER PROBA",
		html: `
			<h1>Prijava</h1>
			<p>Ime: ${req.body.ime}</p>
			<p>JMBG: ${req.body.jmbg}</p>
			<p>Adresa: ${req.body.adresa}</p>
			<p>Telefon: <a href="tel:${req.body.telefon}">${req.body.telefon}</a></p>
			<p>Email: <a href="mailto:${req.body.email}">${req.body.email}</a></p>
			
		`
	}
	await sgMail.send(msg);
	res.json({ok: true});
}

module.exports = prijava;