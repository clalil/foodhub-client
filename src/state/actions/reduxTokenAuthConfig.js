import { generateAuthActions } from "redux-token-auth"

const config = {
  authUrl: process.env.REACT_APP_API_URL + 'auth',
  userAttributes: {
    uid: "uid",
    name: "name",
    id: "id"
  },
  userRegistrationAttributes: {
    uid: "uid",
    name: "name",
    password_confirmation: "password_confirmation"
  }
}

const {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials,
} = generateAuthActions(config)

export {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials,
}