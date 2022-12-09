const createPost = async ({ title, message, date, modified, userId }) => {
    if(!title) return console.log('please send an title')
    if(!message) return console.log('please send a message')

    const users = await fetch('/v1/publication', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title: title,
            message: message,
            date,
            modified,
            userId
        })
    });

    const response = await users.json();
    return response;
};

const getPosts = async(userId) => {
    const result = await fetch(`/v1/publication/${userId}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });

    return result.json();
};

module.exports = { createPost, getPosts };