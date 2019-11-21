import React, { Component } from 'react'
import { Menu, Input, Icon } from 'semantic-ui-react'
import { Link } from "react-router-dom"
import { fetchRecipes } from "../modules/requestRecipes"
import { Message, Header, Grid } from "semantic-ui-react"

  
class Search extends Component {
  state = {
    query: "",
    errorMessage: "",
    searchRecipes: []
  }

  inputChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  getSearchRecipes = async () => {
    const { query } = this.state
    if (query.length < 1) {
      this.setState({
        errorMessage: 'Please input more than two characters.'
      })
    } else {
      let response = await searchRecipes(query)
      if (response.error_message) {
        this.setState({
          errorMessage: response.error_message
        })
      } else {
        this.props.history.push("/search", { searchResults: response })
      }
    }
  }

  render() {
    let search, errorMessage

    if (this.state.errorMessage) {
      errorMessage = <p id="search-error">{this.state.errorMessage}</p>
    }

    search = (
      <Menu.Item id="nav-search">
        <Input
          title="search-input"
          placeholder="Search..."
          name="query"
          onChange={this.inputChangeHandler}
        />
        <Icon
          id="search-submit"
          name="search"
          onClick={this.getSearchRecipes}
        />
      </Menu.Item>
    )

    return (
      <>
        {search}
        {errorMessage}
      </>
    )
  }
}

export default Search