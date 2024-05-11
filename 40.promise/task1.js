const myBirthday = (isKanyoSick) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!isKanyoSick) {
        resolve(2);
      } else {
        reject(new Error("I am sad."));
      }
    }, 2000);
  });
};

myBirthday(false)
  .then((result) => console.log(`I have ${result} cakes`))
  .catch((error) => console.log(error))
  .finally((_) => console.log("party"));

myBirthday(true)
  .then((result) => console.log(`I have ${result} cakes`))
  .catch((error) => console.log(error))
  .finally((_) => console.log("party"));
