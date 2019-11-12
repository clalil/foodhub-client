import axios from 'axios';

const apiUrl = 'http://localhost:3000/v1/'

const fetchRecipes = async () => {
  let response = await axios.get(apiUrl + 'recipes')
  return response.data.recipes
}

const submitRecipe = async (title, ingredients, directions, image) => {
  try {
    let response = await axios.post(apiUrl + 'recipes',
      { recipe:
        {
          title: title,
          ingredients: ingredients,
          directions: directions,
          image: image
        }
      }
    )
    return {
      message: response.data.message,
    }
  } catch(error) {
    return {
      error: error.response.data.error_message
    }
  }
}

export { fetchRecipes, submitRecipe }
