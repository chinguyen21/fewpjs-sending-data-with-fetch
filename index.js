// Add your code here
// let userData = {
//   userName: "Chi",
//   email: "chi@gmail.com",
// };

// let submitData = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json",
//   },
//   body: JSON.stringify(userData),
// };

// fetch("http://localhost:3000/users", submitData)
// .then(res => res.json())
// .then(json => console.log(json))
// .catch(function(error) {
//    alert("Bad things! Ragnarők!");
//    console.log(error.message);
// })

function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
    },
    body: JSON.stringify({name, email}),
  })
    .then(res => res.json())
    .then(function(user) {
      document.body.innerHTML = user.id
    })
    .catch(function(error) {
        alert("Bad things!");
        document.body.innerHTML = error.message;
  });
}