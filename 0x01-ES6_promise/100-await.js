// Importing the functions from utils.js
import { uploadPhoto, createUser } from './utils';

// Define the async function
export default async function asyncUploadUser() {
  try {
    // Await responses from both functions
    const photo = await uploadPhoto();
    const user = await createUser();

    // Return an object with both responses
    return { photo, user };
  } catch (error) {
    // If any error occurs, return an object with null values
    return { photo: null, user: null };
  }
}
