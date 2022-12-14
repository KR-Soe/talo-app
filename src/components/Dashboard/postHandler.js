const createPost = async ({ title, message, date, modified, userId }) => {
    if(!title) return console.log('please send an title')
    if(!message) return console.log('please send a message')

    const publication = await fetch('/v1/publication', {
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

    const response = await publication.json();
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

const deletePublication = async(id) => {
    await fetch(`/v1/publication/${id}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });
}

const updatePost = async({ title, message, date, updated, userId, id }) => {
    if(!title) return console.log('please send an title');
    if(!message) return console.log('please send a message');
    
    await fetch(`/v1/publication/${id}`, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title: title,
            message: message,
            date,
            updated,
            userId
        })
    });
}

module.exports = { createPost, getPosts, deletePublication, updatePost };