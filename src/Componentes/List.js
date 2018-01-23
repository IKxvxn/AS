import React, { Component } from 'react';
import Componente from'./Componente.js'

class List extends Component {
    render() {
      return (
            <ul><Componente ToDo = {this.props.ToDo}/></ul>
      );
    }
  }

export default List;