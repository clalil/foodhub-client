import React from 'react'
import { Container, Divider, Icon, Image, Card, Grid, Segment, Button, Step, Modal } from 'semantic-ui-react'
import '../css/about-us.css'

const AboutUs = () => {
  return (
    <div className="cu-bg">
       <Segment style={{ padding: '8em 0em' }} vertical>
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
          <Divider/>
        </Container>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
         
          <Container>
          <br></br>
          <br></br>
          <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
        <Grid.Column width={6}>
            <Image bordered rounded size='large' src='https://www.gatherandfeast.com/sites/gatherandfeast/files/images/gather-and-feast-table-scene.jpg' />
          </Grid.Column>
          <Grid.Column floated='right' width={8}>
          <center><h1> Meet the Team </h1></center>
          <Divider />
            <Card centered={true}>
              <Card.Content>
                <Card.Header><h3><a href='https://github.com/beccaburns' ><Icon name='github'/>Becca Burns</a></h3></Card.Header>
                <Card.Meta>Future Junior Developer</Card.Meta>
                <Card.Description>
                  BB is a prior digital marketing professional who aspires to bridge a gap between tech & marketing in a new role.
                </Card.Description> 
              </Card.Content>
            </Card>
            <Card centered={true}>
              <Card.Content>
                <Card.Header><h3><a href='https://github.com/clalil' ><Icon name='github'/>Clarissa</a></h3></Card.Header>
                <Card.Meta>Future Junior Developer</Card.Meta>
                <Card.Description>
                  She's a coding wizard & is always ready to offer advice and a helping hand. 
                  Clarissa fosters bunnies & her favorite coding language is JavaScript!
                </Card.Description>
              </Card.Content>
            </Card> 
            <Card centered={true}>
              <Card.Content>
                <Card.Header><h3><a href='https://github.com/shsteindorsson' ><Icon name='github'/>Sverrir</a></h3></Card.Header>
                <Card.Meta>Future Junior Developer</Card.Meta>
                <Card.Description>
                  When Sverrir isn't coding, he loves a good Will Ferrel comedy or a quick video game session! 
                  He's also a Festivus supporter(We know where we're going for the holidays) - and recently found out he is almost 50% Irish.
                </Card.Description>
              </Card.Content>
            </Card>       
            <Card centered={true}>
              <Card.Content>
                <Card.Header><h3><a href='https://github.com/yasmineezequiel' ><Icon name='github'/>Yasmine</a></h3></Card.Header>
                <Card.Meta>Future Junior Developer</Card.Meta>
                <Card.Description>
                  The Jacklyn of ALL TRADES! This lady has done everything from property management to working as a dive master in Honduras(Yes, a dream! 
                  She's done over 100 dives!!! What?!)! Yasmine is a world traveler who made a career shift from travel agent to junior backend developer! 
                </Card.Description>
              </Card.Content>
            </Card>     
            <Card centered={true}>
              <Card.Content>
                <Card.Header><h3><a href='https://github.com/yasmineezequiel' ><Icon name='github'/>Miyesier</a></h3></Card.Header>
                <Card.Meta>Future Junior Developer</Card.Meta>
                <Card.Description>      
                  This cat lover is a heart with arms and legs! She keeps the team light-hearted and is the queen of design and picking the perfect images(which she usually takes herself!).
                </Card.Description>
              </Card.Content>
            </Card> 
            </Grid.Column>
            
            
        </Grid.Row>
      </Grid>
          </Container>            
        </Container>
        </Segment>
      </div>
    )
  }

export default AboutUs