import React, {Component} from 'react';
import Axios from 'axios';

class MyModal extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      character: [],
      name:'',
      image:'',
      shortDescription:'',
      description:'',
    };
  }
    componentDidMount() {
      console.log(this)
      Axios.get("https://character-database.becode.xyz/characters/"+ this.props.charId)
        .then(response => {
        this.setState({
        name : response.data.name,
        image : response.data.image,
        shortDescription : response.data.shortDescription,
        description: response.data.description,
        
          });
        })
    }
    render() {
        const { character } = this.state;
  
   
      return (
       <div>

       </div>
      );
    }
  }
