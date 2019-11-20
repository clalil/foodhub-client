import React from 'react'
import { Container, Divider, Grid, Icon } from 'semantic-ui-react'
import '../css/about-us.css'

const AboutUs = () => {
  return (
    <>
      <Container textAlign='left' >
        <br></br>
        <h1> About FOODHUB </h1>
        <br></br>

          <Container>
          <h3>FOODHUB is a social platform for food lovers. 
              A good meal brings people together and through FOODHUB, you can connect with others through the recipes you create. 
              Create and share your favorite recipes with others around the world!</h3>
          </Container>
        
        <h1> A Quick How-To </h1>
        <Divider/>
        <Container>
        <h3>At FOODHUB, you can customize existing recipes.
            First, fork another person's recipe by pressing this button.
            Then you can make changes and update the recipe in the way you like it best. Maybe an extra spoonful of sugar will do the trick!
            Once you make your change, other's can see your changes and also view the origin user's recipe.
            This is how the community of shared recipes is created!</h3>
        </Container>
        
        <h1> Meet the Team </h1>
        <Divider/>
          <Grid>
            <Grid.Column verticalAlign='center' width='8'>
              <h3><a href='https://github.com/' ><Icon name='github'/>Becca Burns</a></h3>
              <h3><a href='https://github.com/' ><Icon name='github'/>Clarissa</a></h3>
              <h3><a href='https://github.com/' ><Icon name='github'/>Miyesier</a></h3>
              <h3><a href='https://github.com/' ><Icon name='github'/>Sverrir</a></h3>
              <h3><a href='https://github.com/' ><Icon name='github'/>Yasmine</a></h3>
            </Grid.Column>
          </Grid>
        </Container>
      </>
    )
  }
export default AboutUs