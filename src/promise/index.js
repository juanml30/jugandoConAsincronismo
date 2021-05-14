const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (0) {
            resolve('HEY!');
        } else {
            reject('Whooops');
        }
    })
}

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));