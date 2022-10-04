function loadData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayData(data))
}
function displayData(posts) {
    const divContainer = document.getElementById('display-container');
    for (const post of posts) {
        const postDiv = document.createElement('div')
        postDiv.classList.add('post');
        postDiv.innerHTML = `
        <h3>User Id :${post.id}
        <h4>Title: ${post.title}
        <p>Body :${post.body}
        `
        divContainer.appendChild(postDiv)
    }

}
loadData()