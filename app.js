import { getUser, signInUser, signupUser } from './fetch-utils.js';


const signInForm = document.getElementById('sign-in');
const signUpForm = document.getElementById('sign-up');

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signUpForm);
    console.log({ email: data.get('email'), password: data.get('password') });
    const user = await signupUser(data.get('email'), data.get('password'));
    if (user) {
        location.replace('./other-page/index.html');
        if (!user) {
            location.replace('/');
        }
    }
});

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signInForm);
    const user = await signInUser(data.get('email'), data.get('password'));
    if (!user) {
        location.replace('/');
    } else {
        location.replace('./other-page/index.html');
    }
});
// Wire up sign in and sign up forms to supabase
// Redirect to /other-page on successful auth
// Redirect to /other-page when page loads if user is authenticated
