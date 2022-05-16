// Enter Supabase Information
const SUPABASE_URL = 'https://edanuxzgkcleuccdeakc.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkYW51eHpna2NsZXVjY2RlYWtjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIzNjg3OTMsImV4cCI6MTk2Nzk0NDc5M30.HH23nUpy7jCA4AgRRgpIk8M-fwc5zqvBLuE1Muk_lps';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });
    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });
    return response.user;
}

export async function checkAuth() {
    const user = getUser();
    if (!user) location.replace('/');
}

export async function redirectIfLoggedIn() {
    const user = getUser();
    if (user) location.replace('./other-page/index.html');
}

export async function logout() {}
