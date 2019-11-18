import React, { Component } from 'react'
import ListRecipes from './components/ListRecipes'
import SingleRecipe from './components/SingleRecipe'
import Login from './components/Login'
import { Route, Redirect } from 'react-router-dom'
import WelcomePage from './components/WelcomePage'
import RecipeCU from './components/RecipeCU'
import Navbar from './components/Navbar'
import Logout from './components/Logout'
import { generateRequireSignInWrapper } from 'redux-token-auth'
import { connect } from 'react-redux'

const requireSignIn = generateRequireSignInWrapper({
  redirectPathIfNotSignedIn: '/',
})

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
          <Route exact path='/' component={WelcomePage} />
          <Route exact path='/recipes' component={ListRecipes} />
          <Route exact path='/recipes/:id' component={SingleRecipe} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path='/login' component={Login}>
            {this.props.currentUser.isSignedIn ? <Redirect to="/" /> : <Login />}
          </Route>
          <Route exact path='/logout' component={Logout}>
            {this.props.currentUser.isSignedIn === false ? <Redirect to="/" /> : <Logout />}
          </Route>
          <Route exact path="/recipes/create" component={requireSignIn(RecipeCU)} />
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.reduxTokenAuth.currentUser
  }
}

export default connect(
  mapStateToProps
)(App)