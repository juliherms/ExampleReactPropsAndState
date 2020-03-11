import React, { Component } from 'react';
import TechItem from './TechItem';

class TechList extends Component {

    state = {
        newTech: '',
        techs: []
    };

    //excute already component show in the screen
    componentDidMount(){

        const techs = localStorage.getItem('techs');

        if(techs){
            this.setState({ techs: JSON.parse(techs) });
        }
    }

    //execute always change in the props or state
    componentDidUpdate(_,prevState){
        //this.props, this.state
        if(prevState.techs != this.state.techs){
            localStorage.setItem('techs',JSON.stringify(this.state.techs));
        }
    }

    //execute when component is delete or not exists
    componentWillUnmount(){

    }

    //capture value onChange - arrow function
    handleInputChange = e =>{
        this.setState({ newTech: e.target.value });
    }

    handleSubmit = e =>{
        e.preventDefault();
        //... preserve actual values in the array
        this.setState({
             techs: [...this.state.techs,this.state.newTech],
             newTech: ''
             });
    }

    handleDelete = (tech) =>{
        this.setState({ techs: this.state.techs.filter(t => t != tech) })
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <ul>
                    {this.state.techs.map(tech => <TechItem key={tech} tech={tech} onDelete={() => this.handleDelete(tech)}/>)}
                </ul>
                <input type="text" onChange={this.handleInputChange} value={this.state.newTech} />
                <button type="submit">Enviar</button>
            </form>
        );
    }
}

export default TechList;