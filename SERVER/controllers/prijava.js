require("dotenv").config();
const sgMail = require("@sendgrid/mail");
const {BadRequestError} = require("../errors");
const validator = require('validator');

const prijava = async (req, res) => {

	const {ime, jmbg, adresa, telefon, email, kategorija} = req.body;

	if(!ime)
		throw new BadRequestError("Ime i prezime su obavezni");
	if(!adresa)
		throw new BadRequestError("Adresa je obavezna");
	if(!jmbg)
		throw new BadRequestError("JMBG je obavezan");
	if(!telefon)
		throw new BadRequestError("Telefon je obavezan");
	if(!email)
		throw new BadRequestError("Email je obavezan");
	if(!kategorija)
		throw new BadRequestError("Kategorija je obavezna");
	
	if(!validator.isAlpha(ime, 'sr-RS@latin', {	ignore: " "	}))
		throw new BadRequestError("Neispravno ime i prezime");
	if(!validator.isNumeric(jmbg) || jmbg.length != 13)
		throw new BadRequestError("Neispravan jmbg");
	if(!validator.isNumeric(telefon))
		throw new BadRequestError("Neispravan telefon");
	if(!validator.isEmail(email))
		throw new BadRequestError("Neispravan email");
	

	sgMail.setApiKey(process.env.SENDGRID_API_KEY)
	const msg = {
		to: "liderdb036@gmail.com", // Change to your recipient
		from: "Lider <liderdb036@gmail.com>", // Change to your verified sender
		subject: "ONLINE PRIJAVA",
		html: `
			<h1>Prijava</h1>
			<p>Ime: ${ime}</p>
			<p>JMBG: ${jmbg}</p>
			<p>Adresa: ${adresa}</p>
			<p>Telefon: <a href="tel:${telefon}">${telefon}</a></p>
			<p>Email: <a href="mailto:${email}">${email}</a></p>
			<p>Kategorija: ${kategorija}</p>
		`
	}
	await sgMail.send(msg);
	res.json({ok: true});
}

module.exports = prijava;