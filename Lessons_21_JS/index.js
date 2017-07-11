getUsers()
    .then(res => {
        console.log(res.headers.get('Content-type'));
        return res.json();
    })
    .then(users => {
        return getUsers(1);
    })
    .then(user => {
        return user.json();
    })
    .then(user => {
        console.log(user);
    })

function getUsers(){
    return fetch('https://jsonplaceholder.typicode.com/users');
}

function getUser(id) {
    return fetch('https://jsonplaceholder.typicode.com/users/'+id);
}
