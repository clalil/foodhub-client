import React from 'react'
import { Container, Divider, Grid, Icon, List, Segment, Button, Step, Modal } from 'semantic-ui-react'
import ForkButton from '../img/ForkButton.png'
import '../css/about-us.css'

const AboutUs = () => {
  return (
    <div className="cu-bg">
      <Container textAlign='left'>
        <br></br>
        <h1> About FOODHUB </h1>
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
              <Modal trigger={<Button><Step.Content>
                <Step.Title>Create</Step.Title>
              </Step.Content></Button>}>
              
              </Modal>
            </Step>
            <Step>
              <Icon name='plus' />
              <Step.Content>
                <Step.Title>Fork</Step.Title>
              </Step.Content>
            </Step>
            <Step>
              <Icon name='group' />
              <Step.Content>
                <Step.Title>Share</Step.Title>
              </Step.Content>
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