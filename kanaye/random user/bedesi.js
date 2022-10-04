const loadRandomUser = () => {
    fetch('https://randomuser.me/api/?results=15')
        .then(res => res.json())
        .then(data => displayUser(data.results))
}
const displayUser = (users) => {
    console.log(users)
    const userContainer = document.getElementById('user-container')
    for (const user of users) {
        const userDiv = document.createElement('div')
        userDiv.classList.add('user')
        userDiv.innerHTML = `
        <p>Name: ${user.name.first}
        <h4>Email : ${user.email} </h4>
        <h4>Location: ${user.location.city} </h4>
      `
        userContainer.appendChild(userDiv)
    }

}
loadRandomUser()