import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {Container, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';


export default class Home extends Component {
    constructor(props) {
    super(props);
    
      this.state = {
        characters: [],
      }
    }
    
    getApi = () => {
    fetch("https://character-database.becode.xyz/characters")
    .then(response => response.json())
    .then(data => this.setState({ characters: data }));
    }
    componentDidMount() {
      this.getApi()
    }
  render() {
      const { characters } = this.state;
      console.log (characters);
      
    return (
      <React.Fragment>
        
        
        <Container>
            <Row> 
                  {this.state.characters.map(character =>   
                  <Col>             
                    <Card bg="dark" style={{ width: '30rem', marginBottom: '2rem' }}>
                    <div>
                      <img variant="top" src={"data:image;base64,"+character.image}/>
                    </div>
                      <Card.Body>
                        <Card.Title>{character.name}</Card.Title>
                        <Card.Text>
                          {character.shortDescription}
                        </Card.Text>
                        <Link to={"/character/"+character.id}><Button>Plus d'info</Button></Link>
                        <Link to={"/Edit-"+character.id}><Button>Edit</Button></Link>
                      </Card.Body>
                    </Card>   
                  </Col>           
                  )} 
              </Row> 
        </Container>
       </React.Fragment>
    );
  }
}
  
  