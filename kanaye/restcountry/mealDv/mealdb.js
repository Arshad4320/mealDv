const loadData = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`
    console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data.meals))
}
const displayData = (meals) => {
    const mealContainer = document.getElementById('meal-container');
    meals.map(meal => {
        console.log(meal)
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
    <div class="card">
      <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${meal.strIngredient9}</h5>
        <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
      </div>
    </div>
    `
        mealContainer.appendChild(mealDiv)
    })

}
const searchFood = () => {
    const search = document.getElementById('search-field');
    const searchText = search.value;
    loadData(searchText)
    search.value = ''
}
loadData()