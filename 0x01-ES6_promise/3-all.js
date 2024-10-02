import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((responses) => {
      const [photoResponse, userResponse] = responses;
      console.log(`${userResponse.body.firstName} ${userResponse.body.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
handleProfileSignup();
