module.exports = {
  userNotFoundError: [400, 'User not found or password is incorrect'],
  emailAlreadyExistsError: [400, 'This Email address is already in use'],
  generalError: [500, 'Something went wrong'],
  unauthorisedError: [403, 'User Unuthorised'],
}