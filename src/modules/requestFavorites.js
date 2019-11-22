import axios from 'axios'
import getCurrentCredentials from './getCredentials'

const submitFavorite = async (recipeId) => {
  try {
    let response = await axios.post(`recipes/${recipeId}/favorite`, 
    {},
      {
        headers: getCurrentCredentials()
      }
    )
    return {
      message: response.data.message
    }
  } catch(error) {
    return {
      error: error.response.data.error_message
    }
  }
}

const fetchFavorites = async () => {
  let response = await axios.get('favorites',
  {
    headers: getCurrentCredentials()
  }
  )
  return response.data.cookbook.cookbook_recipes
}

const fetchCookbookPdf = async () => {
  let response = await axios.post('cookbooks',
    {},
    {
      headers: getCurrentCredentials()
    }
  )
  return response.data
}

const submitRating = async (recipeId, rating) => {
  try {
    let response = await axios.post(`recipes/${recipeId}/rating`, 
      {
        score: rating
      },
      {
        headers: getCurrentCredentials()
      }
    )
    return response
  } catch(error) {
    return {
      error: error.response.data.error_message
    }
  }
}

export { submitFavorite, fetchFavorites, fetchCookbookPdf, submitRating }