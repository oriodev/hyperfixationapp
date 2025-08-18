import { deleteSession } from "./session.api";

export const login = async () => {
  try {
    // call the database

    // in login api route:
    // 2a. find the user from the email/username
    // 2b. throw exception if can't find

    // 2c. use bcrypt to check password match
    // const match = await comparePasswords(password, hashedPassword);

    // 2d. throw exception if can't match
    // 2e. generate a token based on the user id
    // 2f. return the token
    
  } catch (error) {
    console.log(error);
  }
};

export const signUp = async () => {
  try {
    // 1a. hash password
    // 1b. create user in database
    // 1c. check for email/username dupes
    // 1d. create a token with created user id returned from db when created
    // 1e. return token or error messages
  } catch (error) {
    console.log(error);
  }
};

export const logout = async () => {
  try {
    deleteSession();
  } catch (error) {
    console.log(error);
  }
};