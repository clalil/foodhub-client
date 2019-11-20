import React from 'react'
import { Container, Divider, Grid, Header, Icon, Table } from 'semantic-ui-react'

const AboutUs = () => {
  return (
    <>
      <Container textAlign='center' >
        <br/>
        <h1> FOODHUB </h1>
        <Divider/>
        <Container text>
        <p>FOODHUB is a social platform for food lovers.</p>
        <p>A good meal brings people together and through FOODHUB, you can connect with others through the recipes you create.</p> 
        <p>Create and share your favorite recipes with others around the world!</p>
        </Container>
        <h1> A Quick How-To </h1>
        <Divider/>
        <Container text>
        <p>At FOODHUB, you can customize existing recipes.</p>
        <p>First, fork another person's recipe by pressing this button.</p>
        <p>Then you can make changes and update the recipe in the way you like it best. Maybe an extra spoonful of sugar will do the trick!</p>
        <p>Once you make your change, other's can see your changes and also view the origin user's recipe.</p>
        <p>This is how the community of shared recipes is created!</p>
        </Container>
        <Grid>    
          <Grid.Row>
          <Divider/>
            <Grid.Column width='8'>
              <Grid.Row>
                <Header size='medium'>Meet the Team</Header> 
              </Grid.Row>  
              <br/>
              <Grid>
                <Grid.Column verticalAlign='left' width='8'>
                  <h3>Becca Burns</h3> 
                  <h3>Clarissa Liljander</h3>
                  <h3>Miyesier Kaerman</h3>
                  <h3>Sverrir Steindorsson</h3>
                  <h3>Yasmine Ezequiel</h3>
                </Grid.Column>
                <Grid.Column width='2'></Grid.Column>
                <Grid.Column verticalAlign='middle' width='6'> 
                  <Table collapsing>
                    <Table.Header> 
                      <Table.HeaderCell><Icon size='large' name='github square'/>Find Us on GitHub</Table.HeaderCell>
                    </Table.Header>
                    <Table.Body>
                      <Table.Row><Table.Cell><h4><a href='https://github.com/' ><Icon name='github'/>Becca</a></h4></Table.Cell></Table.Row>
                      <Table.Row> <Table.Cell><h4><a href='https://github.com/' ><Icon name='github'/>Clarissa</a></h4></Table.Cell></Table.Row>
                      <Table.Row><Table.Cell><h4><a href='https://github.com/' ><Icon name='github'/>Miyesier</a></h4></Table.Cell></Table.Row>
                      <Table.Row><Table.Cell><h4><a href='https://github.com/' ><Icon name='github'/>Sverrir</a></h4></Table.Cell></Table.Row>
                      <Table.Row><Table.Cell><h4><a href='https://github.com/' ><Icon name='github'/>Yasmine</a></h4></Table.Cell></Table.Row>
                    </Table.Body>
                  </Table>
                </Grid.Column>
              </Grid>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </>
  )
}
export default AboutUs