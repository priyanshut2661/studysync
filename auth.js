// Appwrite connection
const client = new Appwrite.Client();

client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("studysync");

const account = new Appwrite.Account(client);


// SIGN UP
async function signup(email, password) {
    try {
        await account.create({
            userId: Appwrite.ID.unique(),
            email: email,
            password: password
        });

        alert("Account created successfully!");
        window.location.href = "login.html";

    } catch (error) {
        console.error(error);
        alert(error.message);
    }
}


// LOGIN
async function login(email, password) {
    try {
        await account.createEmailPasswordSession({
            email: email,
            password: password
        });

        alert("Login successful!");
        window.location.href = "index.html";

    } catch (error) {
        console.error(error);
        alert(error.message);
    }
}


// LOGOUT
async function logout() {
    try {
        await account.deleteSession("current");
        window.location.href = "login.html";
    } catch (error) {
        console.error(error);
    }
}