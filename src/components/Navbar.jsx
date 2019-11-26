import React, { useState } from 'react'
import { Menu, Header, Icon, Responsive, Sidebar } from 'semantic-ui-react'
import '../css/navbar.css'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import Login from './Login'
import Logout from './Logout'
import Search from './Search'
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = ({ currentUser }) => {

  const [modalOpen, setModalOpen] = useState(false)
  const [visible, setVisibleSideBar] = useState(false)

  const handleModalOpen = () => {
    setModalOpen(!modalOpen)
  }

  const handleOpenSidebar = () => {
    setVisibleSideBar(!visible)
  }

  const notMobile = { minWidth: Responsive.onlyMobile.maxWidth + 1 }
  let logOut, logIn, welcomeMessage, createRecipe, aboutUs, cookbook, userProfile, search, viewAll

  if (currentUser.isSignedIn) {
    welcomeMessage = (
      <Menu.Item>
        <Header
          position='right'
          id="welcome-message"
        >
          Hello {currentUser.attributes.name}
        </Header>
      </Menu.Item>
    )
    logOut = (
      <Logout
        handleModalOpen={handleModalOpen}
      />
    )
    cookbook = (
      <Menu.Item id='nav-cookbook' as={NavLink} to='/cookbook'>
        <Header position='right'>
          My Cookbook
          </Header>
      </Menu.Item>
    )
    createRecipe = (
      <Menu.Item id='nav-create' as={NavLink} to='/recipes/create'>
        <Header position='right'>
          Create Recipe
          </Header>
      </Menu.Item>
    )
    userProfile = (
      <Menu.Item id='nav-profile' as={NavLink} to='/profile'>
        <Header position='right'>
          My Recipes
          </Header>
      </Menu.Item>
    )
  } else {
    aboutUs = (
      <Menu.Item id='nav-create' as={NavLink} to='/about'>
        <Header position='right'>
          About Us
          </Header>
      </Menu.Item>
    )
    logIn = (
      <Menu.Item id='nav-login' className='fake-link-hover'>
        <Header
          position='right'
          onClick={handleModalOpen}>
          Log in
          </Header>
        <Login
          modalOpen={modalOpen}
          handleModalOpen={handleModalOpen}
        />
      </Menu.Item>
    )
  }
  viewAll = (
    <Menu.Item>
      <Link
        to="/#view-all-recipes"
        activeClassName="selected">
        <Header position='right'>
          View All Recipes
        </Header>
      </Link>
    </Menu.Item>
  )

  search = (
    <Menu.Item id='nav-search' className='fake-link-hover'>
      <Search
        modalOpen={modalOpen}
        handleModalOpen={handleModalOpen}
      />
    </Menu.Item>
  )

  return (
    <>
      <Responsive {...Responsive.onlyMobile}>
        <Menu id='navbar' borderless={true}>
          <Menu.Item
            as={NavLink}
            to='/'
            id='nav-home'>
            <Header position='left' className='navbar-header' background='#FCE8CE'>
              FOODHUB
            </Header>
          </Menu.Item>
          <Menu.Item onClick={handleOpenSidebar} position='right' id="sidebar-menu">
            <Icon size="big" name="align justify" />
          </Menu.Item>
        </Menu>

        <Sidebar
          as={Menu}
          animation='overlay'
          icon='labeled'
          vertical
          visible={visible}
          onClick={handleOpenSidebar}
          style={{ minWidth: "100%" }}
          id="mobile-menu"
        >
          <Menu.Menu>
            <Menu.Item
              as={NavLink}
              to='/'
              id='nav-home'
            >
              <Header position='left' className='navbar-header'>
                FOODHUB
                </Header>
              <Icon name='food' size='large' />
            </Menu.Item>
            {welcomeMessage}
            {viewAll}
            {createRecipe}
            {aboutUs}
            {cookbook}
            {logIn}
            {userProfile}
            {logOut}
            {search}
          </Menu.Menu>
        </Sidebar>
      </Responsive>

      <Responsive {...notMobile}>
        <Menu id='navbar' borderless={true}>
          <Menu.Item
            as={NavLink}
            to='/'
            id='nav-home'
          >
            <Header className='navbar-header'>
              FOODHUB
              </Header>
          </Menu.Item>
          <Menu.Menu position='right'>
            {welcomeMessage}
            {createRecipe}
            {viewAll}
            {aboutUs}
            {cookbook}
            {logIn}
            {userProfile}
            {logOut}
            {search}
          </Menu.Menu>
        </Menu>
      </Responsive >
    </>
  )
}

const mapStateToProps = state => {
  return {
    state: state,
    currentUser: state.reduxTokenAuth.currentUser
  }
}

export default connect(
  mapStateToProps
)(Navbar);