import React, { Component } from 'react';
import Componente from'./Componente.js'

class List extends Component {
    render() {
      return (
            <ul onClick={this.props.remove}><Componente ToDo = {this.props.ToDo} remove = {this.handleRemove}/></ul>
      );
    }
  }

export default List;