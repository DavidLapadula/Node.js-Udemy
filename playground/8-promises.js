const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([1, 2, 3]);
    }, 2000);
});

doWorkPromise
    .then((data) => {
        console.log('data', data);
    })
    .catch((err) => {
        console.log('err', err);
    }); 