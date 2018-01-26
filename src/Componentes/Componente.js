import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

  Componente.propTypes = {
    ToDo:PropTypes.array,
    remove:PropTypes.func
 }
 Componente.defaultProps = {
  ToDo:[],
  remove: () => {}
}

export default Componente;