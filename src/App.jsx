import React, { useEffect } from 'react'
import ListRecipes from './components/ListRecipes'
import SingleRecipe from './components/SingleRecipe'
import Login from './components/Login'
import { Route, Redirect } from 'react-router-dom'
import WelcomePage from './components/WelcomePage'
import RecipeCU from './components/RecipeCU'
import Navbar from './components/Navbar'
import Logout from './components/Logout'
import Cookbook from './components/Cookbook'
import { generateRequireSignInWrapper } from 'redux-token-auth'
import { connect } from 'react-redux'
import SignUp from './components/SignUp'
import AboutUs from './components/AboutUs'
import UserProfile from './components/UserProfile'
import Search from './components/Search'
import getCurrentCredentials from './modules/getCredentials'
import axios from 'axios'

const requireSignIn = generateRequireSignInWrapper({
  redirectPathIfNotSignedIn: '/',
})

const App = ({ currentUser }) => {

  useEffect(() => {
    axios.defaults.headers = getCurrentCredentials()
  }, [currentUser])

    return (
      <>
        <Navbar />
          <Route exact path='/' component={WelcomePage} />
          <Route exact path='/recipes' component={ListRecipes} />
          <Route exact path='/recipe/:id' component={SingleRecipe} />
          <Route exact path='/search' component={Search} />
          <Route exact path='/logout' component={Logout} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/about' component={AboutUs} />
          {currentUser.isSignedIn ? <Redirect to="/" /> : <Login />}
          <Route exact path="/recipes/create" component={requireSignIn(RecipeCU)} />
          <Route exact path="/cookbook" component={requireSignIn(Cookbook)} />
          <Route exact path="/profile" component={requireSignIn(UserProfile)} />
      </>
    )
}

const mapStateToProps = state => {
  return {
    currentUser: state.reduxTokenAuth.currentUser
  }
}

export default connect(
  mapStateToProps
)(App)