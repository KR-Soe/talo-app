const registerUser = async ({email, password, username}) => {
    if(!email) return console.log('please send an email');
    if(!password) return console.log('please send a password');
    if(!username) return console.log('please send a username');

    const users = await fetch('/v1/users', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password,
            username: username
        })
    });

    const response = await users.json();
    return response;
}

module.exports = registerUser;