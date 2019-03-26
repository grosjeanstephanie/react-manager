import React, {Component} from 'react';





export default class Display extends Component {
      constructor(props) {
        super(props);
        
        this.state = {
          character: [],
        };
      }
        
      getApi = () => {
        fetch("https://character-database.becode.xyz/characters/"+this.props.match.params.id)
        .then(response => response.json())
        .then(data => this.setState({ character: data }));
      }
      componentDidMount() {
          this.getApi()
      }
      render() {
        const { character } = this.state;
        console.log (character);
        
        return (
          <div> 
              {this.state.character.name} <img src={"data:image;base64,"+character.image} alt="Not Found" />
          </div>
        );
      }
  }