import React from 'react'
import { Container, Divider, Grid, Icon, Image, Header, Segment, Button, Step, Modal } from 'semantic-ui-react'
import '../css/about-us.css'

const AboutUs = () => {
  return (
    <div className="cu-bg">
      <Container textAlign='left'>
        <br></br>
        <h1>About FOODHUB</h1>
        <br></br>

      <Container>
      <h3>FOODHUB is a social platform for food lovers. 
          A good meal brings people together and through FOODHUB, you can connect with others through the recipes you create. 
          Create and share your favorite recipes with others around the world!</h3>
      </Container>        
      <br></br>
      <br></br>

      <Container>
      <h3>At FOODHUB, you can customize existing recipes. This is how the community of shared recipes is created!</h3>
      <br></br>
        <Divider horizontal><h2>How it Works</h2></Divider>
        <Step.Group widths={3}>
          <Step>
            <Icon name='food' />
              <Modal trigger={<Button basic>
                <Step.Content>
                  <Step.Title>Create</Step.Title>
                </Step.Content></Button>}>
              <Modal.Header>Create Recipes</Modal.Header>
                <Modal.Content image>
                  <Image wrapped size='large' src='https://144f2a3a2f948f23fc61-ca525f0a2beaec3e91ca498facd51f15.ssl.cf3.rackcdn.com/uploads/food_portal_data/recipes/recipe/hero_article_image/3329/7f164063ce0ede8959b2/letterbox_SMALLERSharingBread_103918.jpg' />
                  <Modal.Description>
                    <h3>Once you create an account on FOODHUB, you can create your own recipe!</h3>
                    <h3>What fun recipes would you like to share with our FOODHUB community of foodies?</h3>
                    <a href='/signup'>Create an account today!</a>
                  </Modal.Description>
                </Modal.Content>
              </Modal>
            </Step>
            <Step>
              <Icon name='plus' />
                <Modal trigger={<Button basic>
                  <Step.Content>
                    <Step.Title>Fork</Step.Title>
                  </Step.Content></Button>}>
                <Modal.Header>Fork & Customize Recipes</Modal.Header>
              <Modal.Content image>
                <Image wrapped size='medium' src='https://www.forkintheroad.co/wp-content/uploads/2018/09/pan-roasted-okra-107.jpg' />
                  <Modal.Description>
                    <h3>You've tried a recipe on FOODHUB. Now, you want to add it to your collection and add another ingredient for next time.</h3>
                    <h2>No Problem!</h2>
                    <h3>When you Fork other Foodies recipes by clicking the <Icon name="food" size="small" /> button on their recipe, 
                        you can customize it to make it your own.</h3>
                    <h3>Your connections will now see all of the recipes you forked and the user's you forked them from.</h3>
                  </Modal.Description>
                </Modal.Content>
              </Modal>
            </Step>
            <Step>
              <Icon name='book' />
                <Modal trigger={<Button basic>
                  <Step.Content>
                    <Step.Title>Save</Step.Title>
                  </Step.Content></Button>}>
                <Modal.Header>Collect your Favorite Recipes in a Cookbook</Modal.Header>
              <Modal.Content image>
                <Image wrapped size='large' src='https://www.peacefuldumpling.com/wp-content/uploads/2017/03/moon-juice-cookbook-3-700x467.jpg' />
                  <Modal.Description>
                    <h3>Made with <Icon name="heart" size="small" /> by FOODHUB.</h3>
                    <h3>Easily make a cookbook at FOODHUB by adding your favorite recipes to your own Cookbook created by us.
                        Access your recipes from anywhere online and even better, get your own PDF!
                    </h3>
                  </Modal.Description>
                </Modal.Content>
              </Modal>
            </Step>
          </Step.Group>
        </Container>
        <br></br>
        <br></br>
        <Segment>
          <h1> Meet the Team </h1>
          <Divider/>
            <Grid>
              <Grid.Column verticalAlign='left' width='8'>
                <h3><a href='https://github.com/beccaburns' ><Icon name='github'/>Becca Burns</a></h3>
                <h3><a href='https://github.com/clalil' ><Icon name='github'/>Clarissa</a></h3>
                <h3><a href='https://github.com/' ><Icon name='github'/>Miyesier</a></h3>
                <h3><a href='https://github.com/shsteindorsson' ><Icon name='github'/>Sverrir</a></h3>
                <h3><a href='https://github.com/yasmineezequiel' ><Icon name='github'/>Yasmine</a></h3>
              </Grid.Column>
            </Grid>
          </Segment>
        </Container>
      </div>
    )
  }
export default AboutUs