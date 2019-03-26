import React, { Component } from 'react';


export default class Creates extends Component{
    constructor(){
        super()
        this.onChangeName=this.onChangeName.bind(this)
        this.onChangeshortDescription=this.onChangeshortDescription.bind(this)
        this.state = {
            Name:'',
            shortDescription:''
        }
    }

    onSubmit(e){

    }

    onChangeName(e){
        this.setState(
            {
                Name:e.target.value
            }
        )
    }
    onChangeshortDescription(e){
        this.setState(
            {
                shortDescription:e.target.value
            }
        )
    }
    render(){
        return(
            <div>
                <form>
                    <input type="text" defaultValue={this.state.name} onChange={this.onChangeName}/>
                    <input type="text" defaultValue={this.state.shortDescription} onChange={this.onChangeshortDescription}/>              
                </form>
            </div>
        );
    }
}
