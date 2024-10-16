module.exports = {
  // status: 400
  userNotFoundError: [400, 'User not found or password is incorrect'],
  emailAlreadyExistsError: [400, 'This Email address is already in use'],

  // status: 403
  unauthorisedError: [403, 'User Unuthorised'],

  // status: 404
  itemNotFoundError: [404, 'Item not found'],

  // status: 500
  generalError: [500, 'Something went wrong'],
}