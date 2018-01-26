import React, { Component } from 'react';
import Componente from'./Componente.js'
import PropTypes from 'prop-types';

class List extends Component {
    render() {
      return (
            <ul onClick={this.props.remove}><Componente ToDo = {this.props.ToDo} remove = {this.handleRemove}/></ul>
      );
    }
  }

  List.propTypes = {
      ToDo:PropTypes.object,
      remove:PropTypes.func
   }

  List.defaultProps = {
    ToDo:[],
    remove: () => {}
  }

export default List;