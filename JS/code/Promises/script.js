// // promise creation
// let mood = "bad";
// let P = new Promise(function (resolve,reject)
// {
//     if (mood == "good")
//     {
//         setTimeout(() => resolve("take 1 lakh"), 5000)
//     }
//     else
//     {
//         setTimeout(() => reject("i don't wanna give"), 5000)
//     }
// })

// //frontend
// P
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err))
    

// //another promise
// let x = new Promise((resolve, reject) =>
// {
//     resolve(20);
// })
// //handling the promise
// x
//     .then((res) => res * 2)
//     .then((res) => res * 4)
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err))
  




// fetch

fetch("https://iplocate.io/api/lookup")
    .then((res) => res.json())
    .then((data) =>
    {
        document.getElementById('loc').textContent = `You are from :${data.city} with
        latitude: ${data.latitude} and longitude: ${data.longitude}`
    })
    .catch((err) => console.log(err));















