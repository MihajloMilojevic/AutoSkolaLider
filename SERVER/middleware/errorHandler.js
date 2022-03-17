const { StatusCodes } = require('http-status-codes')

module.exports = (err, req, res, next) => {
	//console.error(err);
	let customError = { // ERROR OBJECT WITH DEFAULT VALUES
		// set default
		statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
		msg: err.message || "Došlo je do greške, probaj ponovo kasnije",
	  }
	
	  //SEND ERROR
	  return res.status(customError.statusCode).json({ ok: false, message: customError.msg })
  }