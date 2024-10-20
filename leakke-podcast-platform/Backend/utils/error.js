const errHandler = (req, res, next) => {
  res.error = (err) => {
    const [status, msg] = err;
    res.status(status).send(msg);
  }
  next();
}


module.exports = {
  // status: 400
  dataNotFoundError: [400, 'Data not found'],
  emailAlreadyExistsError: [400, 'This Email address is already in use'],

  // status: 403
  unauthorisedError: [403, 'User Unuthorised'],

  // status: 404
  itemNotFoundError: [404, 'Item not found'],

  // status: 500
  generalError: [500, 'Something went wrong'],

  errHandler
}

