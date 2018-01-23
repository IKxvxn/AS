import React, { Component } from 'react';

class Componente extends Component {
    render() {
      return (

        this.props.ToDo.map(function(Item) {
            return <li>{Item.Value}</li>
         })        
      );
    }
  }

export default Componente;