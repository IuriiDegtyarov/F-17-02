// getUsers()
//     .then(res => {
//         console.log(res.headers.get('Content-type'));
//         return res.json();
//     })
//     .then(users => {
//         let promiseArr = [];
//         for (let i = 0; i < users.length; i++) {
//             let user = users[i];
//             promiseArr.push(getUser(user.id));
//         }
//         return Promise.all(promiseArr);
//     })
//     .then(users => {
//         let promiseArr = [];
//         for (let i = 0; i < users.length; i++) {
//             let user = users[i];
//             promiseArr.push(user.json());
//         }
//         return Promise.all(promiseArr);
//     })
//     .then(users => {
//         console.log(users);
//     })
//     .catch(errHandler);


// function getUsers() {
//     return fetch('https://jsonplaceholder.typicode.com/users');
// }

// function getUser(id) {
//     return fetch('https://jsonplaceholder.typcode.com/users/' + id);
// }

// function errHandler(err) {
//     console.log(err);
// }




// doSomething().then(function () {
//   return doSomethingElse();
// });

// doSomething().then(function () {
//   doSomethingElse();
// });

// doSomething().then(doSomethingElse());

// doSomething().then(doSomethingElse);



// fetch(url, function (res) {
//     fetch(url, function (res) {
//         for (let i = 0; i < res.length; i++) {
//             console.log(res[i]);
//         }
//         if (..) {
//             console.log(asdasd);
//         }
//         fetch(url, function (res) {

//             for (let i = 0; i < res.length; i++) {
//                 console.log(res[i]);
//             }
//             if (..) {
//                 console.log(asdasd);
//             }    
//             fetch(url, function (res) {
//                 for (let i = 0; i < res.length; i++) {
//                     console.log(res[i]);
//                 }
//                 if (..) {
//                     console.log(asdasd);
//                 }
//                 fetch(url, function (res) {

//                     for (let i = 0; i < res.length; i++) {
//                         console.log(res[i]);
//                     }
//                     if (..) {
//                         console.log(asdasd);
//                     }
//                 })
//             })
//         })
//     })
// })


// remotedb.allDocs(...)
//   .then(function (resultOfAllDocs) {
//     for (let i = 0; i < res.length; i++) {
//         console.log(res[i]);
//     }
//     if (..) {
//         console.log(asdasd);
//     }
//     return localdb.put(...);
//   })
//   .then(function (resultOfPut) {
//     for (let i = 0; i < res.length; i++) {
//         console.log(res[i]);
//     }
//     if (..) {
//         console.log(asdasd);
//     }
//     return localdb.get(...);
//   })
//   .then(function (resultOfGet) {
//     for (let i = 0; i < res.length; i++) {
//         console.log(res[i]);
//     }
//     if (..) {
//         console.log(asdasd);
//     }
//     return localdb.put(...);
//   })
//   .then(function (resultOfGet) {
//     for (let i = 0; i < res.length; i++) {
//         console.log(res[i]);
//     }
//     if (..) {
//         console.log(asdasd);
//     }
//     return localdb.put(...);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });


function getImage(id) {
    return fetch('https://jsonplaceholder.typicode.com/photos/'+ id)
}

function slider() {
    const image = document.querySelector('.image img');
    const title = document.querySelector('.title');
    let number = 1;
    document.querySelector('.right').addEventListener('click', () => {
        getImage(++number)
            .then(res => {
                return res.json();
            })
            .then(res => {
                image.src = res.url;
                title.innerHTML = res.title;
            })
    });
    document.querySelector('.left').addEventListener('click', () => {
        if (--number < 1) {
            number = 5000;
        }
        getImage(number)
            .then(res => {
                return res.json();
            })
            .then(res => {
                image.src = res.url;
                title.innerHTML = res.title;
            })
    });
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('ready');
    slider();
})


https://habrahabr.ru/company/mailru/blog/269465/ - "У нас проблемы с промисами"
https://habrahabr.ru/company/nixsolutions/blog/323066/ - "Промисы на примере бургерной вечеринки"
https://www.youtube.com/playlist?list=PLrCZzMib1e9qZwq95WVmGB-acnot5ka4a - "Плейлист с лекциями по поводу сетевых протоколов\http"

https://github.com/github/fetch - "fetch полифил"


https://habrahabr.ru/post/215117/ - "Простым языком про http"
https://www.objc.io/issues/10-syncing-data/ip-tcp-http/ - "Про сетевые протоколы (англ)"
https://habrahabr.ru/post/308846/ - "http2"
https://www.lektorium.tv/course/22904 - "курс лекций про компьютерные сети"