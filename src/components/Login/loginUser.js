const loginUser = async (email, password) => {
    if(!email) return console.log('please send an email')
    if(!password) return console.log('please send a password')

    const users = await fetch('/v1/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    });

    const response = await users.json();
    return response;
}

module.exports = { loginUser };