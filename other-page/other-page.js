import { checkAuth, logout } from '../fetch-utils.js';

checkAuth();
const logoutBtn = document.getElementById('logout');

logoutBtn.addEventListener('click', async () => {
    await logout();
});
// use checkAuth function to redirect is user not authenticated
// add event listener to the logout button and call logout
