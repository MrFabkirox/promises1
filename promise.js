const promise =
  new Promise((resolve, reject) => {
    resolve('goog');
    //reject('bad');
  })
    .then(value => {
      console.log("value [%o]", value);
    })
    .catch(err => {
      console.log("err [%o]", err);
    });
