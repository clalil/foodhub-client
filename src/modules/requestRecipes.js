import axios from 'axios'
import getCurrentCredentials from './getCredentials'

const apiUrl = 'http://localhost:3000/v1/'

const toBase64 = file => new Promise((resolve, reject) => {
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = () => resolve(reader.result)
  reader.onerror = error => reject(error)
})

const fetchRecipes = async () => {
  let response = await axios.get(apiUrl + 'recipes')
  return response.data.recipes
}

const searchRecipes = async (query) => {
  try {
    let response = await axios.post(apiUrl + 'search',
      {
        q: query
      }
    )

    return response.data.recipes
  } catch(error) {
    return {
      errorMessage: error.response.data.message
    }
  }
}

const fetchCurrentUsersRecipes = async () => {
  let response = await axios.get(apiUrl + 'recipes?user_recipe=true',
    {
      headers: getCurrentCredentials()
    }
  )
  return response.data.recipes
}

const submitRecipe = async (title, description, ingredients, directions, image) => {
  try {
    let encodedImage, recipeParams
    recipeParams = {
      title: title,
      description: description,
      ingredients: ingredients,
      directions: directions
    }

    if (image) {
      encodedImage = await toBase64(image)
      recipeParams.image = encodedImage
    }

    let response = await axios.post(apiUrl + 'recipes',
      {
        recipe: recipeParams
      },
      {
        headers: getCurrentCredentials()
      }
    )

    return {
      message: response.data.message,
    }
  } catch(error) {
    return {
      error: error.response.data.error_message || error.message 
    }
  }
}

const editRecipe = async (title, description, ingredients, directions, image, recipeId) => {
  try {
    let encodedImage, recipeParams
    recipeParams = {
      title: title,
      description: description,
      ingredients: ingredients,
      directions: directions
    }

    if (image) {
      encodedImage = await toBase64(image)
      recipeParams.image = encodedImage
    }

    let response = await axios.put(apiUrl + `recipes/${recipeId}`,
      {
        recipe: recipeParams
      },
      {
        headers: getCurrentCredentials()
      }
    )

    return {
      message: response.data.message,
    }
  } catch(error) {
    return {
      error: error.response.data.error_message || error.message 
    }
  }
}

const forkRecipe = async (title, description, ingredients, directions, image, recipeId) => {
  try {
    let encodedImage, recipeParams
    recipeParams = {
      title: title,
      description: description,
      ingredients: ingredients,
      directions: directions
    }

    if (image) {
      encodedImage = await toBase64(image)
      recipeParams.image = encodedImage
    }

    let response = await axios.post(apiUrl + `recipes/${recipeId}/fork`,
      {
        recipe: recipeParams
      },
      {
        headers: getCurrentCredentials()
      }
    )
    return {
      recipeId : response.data.forked_recipe_id,
      message: response.data.message
    }
  } catch(error) {
    return {
      error: error.response.data.error_message || error.message 
    }
  }
}

const getSingleRecipe = async (recipeId) => {
  try {
    let response = await axios.get(apiUrl + `recipes/${recipeId}`,
      {
        headers: getCurrentCredentials()
      }
    )
    return {
      recipe: response.data.recipe
    }
  } catch(error) {
    return {
      error: error.response.data.error_message
    }
  }
}

export { fetchRecipes, submitRecipe, getSingleRecipe, editRecipe, forkRecipe, fetchCurrentUsersRecipes, searchRecipes }