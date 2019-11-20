import React from 'react'
import { Container, Divider, Grid, Header, Icon, Table } from 'semantic-ui-react'

const AboutUs = () => {
  return (
    <>
      <Container textAlign='center' >
        <br/>
        <Header size='huge'> <Icon name='tree'/> FOODHUB </Header>
        <Divider/>
        <Container text>
        <p>FOODHUB is a social platform for food lovers. A good meal brings people together and through FOODHUB, you can connect with others through the recipes you create.</p> 
        <p>Create and share your favorite recipes with others around the world!</p>
        </Container>
        <Divider/>
        <Grid>    
          <Grid.Row>
            <Grid.Column width='10'>
              <Grid.Row>
                <Header size='medium'>Meet the Team<img src={logo} alt='Logo'/></Header> 
              </Grid.Row>  
              <br/>
              <Grid>
                <Grid.Column verticalAlign='middle' width='8'>
                  <Header size='large' dividing > The Team</Header>
                  <h3>Becca Burns</h3> 
                  <h3>Clarissa Liljander</h3>
                  <h3>Miyesier Kaerman</h3>
                  <h3>Sverrir Steindorsson</h3>
                  <h3>Yasmine Ezekiel</h3>
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