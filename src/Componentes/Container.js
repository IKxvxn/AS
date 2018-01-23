import React, { Component } from 'react';
import List from './List.js'
const uuid = require('uuid/v1')

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ToDo: [{ Value: "Madurar", Key: "0", Done: true }, { Value: "No consumir el oxígeno de otros", Key: "1", Done: false }],
      newToDo: ""
    };
    this.handleToDoChange = this.handleToDoChange.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.removeAux = this.removeAux.bind(this);
  }
  handleToDoChange(e) {
    this.setState({ newToDo: e.target.value })
  }

  onAdd() {
    let newToDo = {
      Value: this.state.newToDo,
      Key: uuid(),
      Done: false
    }
    this.setState({ ToDo: [...this.state.ToDo, newToDo] })
  }

  handleRemove(e) {
    let id = e.target.getAttribute('id')
    let refToDo = this.state.ToDo;
    let removeAux = this.removeAux

    refToDo.map(function (item) {
      if (item.Key == id) {
        if (item.Done == false) { item.Done = true; }
        else {removeAux(item.Key)}
      }
    });
    this.setState({ ToDo: [...this.state.ToDo] })

  }

  removeAux(Key){
    this.state.ToDo=this.state.ToDo.filter(function(item) { 
      return item.Key !== Key;  
   });
  }

  render() {
    return (
      <div>
        <h1>TodoList</h1>
        <input type="text" name="ToDo" id="InputTODO" value={this.state.newToDo} onChange={this.handleToDoChange} />
        <input type="button" value="Add" onClick={this.onAdd} />
        <List ToDo={this.state.ToDo} remove={this.handleRemove} />
      </div>
    );
  }

}

export default Container;


