import React, { Component } from 'react';

class Componente extends Component {
    render() {
      return (

        this.props.ToDo.map(function(Item) {
          if (Item.Done==false){
            return <li class="UnDone" id={Item.Key}>{Item.Value}</li>}
          return <li class="Done" id={Item.Key}>{Item.Value}</li>
         })        
      );
    }
  }

export default Componente;