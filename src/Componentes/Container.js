import React, { Component } from 'react';
import List from './List.js'

import { connect } from 'react-redux'
import TodoList from './Reducer_ToDo'
import { addTodo, loadTodo, doneTodo, deleteTodo } from './Actions'
import { log } from 'util';

const uuid = require('uuid/v1')



class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ToDo: [],
      newToDo: ""
    };
    this.handleToDoChange = this.handleToDoChange.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.onAdd = this.onAdd.bind(this);
  }
  handleToDoChange(e) {
    this.setState({ newToDo: e.target.value })
  }

  onAdd = () => {
    console.log(this.state.newToDo)
    this.props.addTodo(this.state.newToDo)
    this.setState({ newToDo: '' })
  }

  handleRemove(e) {
    let id = e.target.getAttribute('id')
    let removeAux = this.removeAux;
    let doneTodo = this.props.doneTodo
    let deleteTodo = this.props.deleteTodo
    let x = 0

    this.props.ToDo.map(function (item) {
      if (item.Key == id) {
        if (item.Done == false) {doneTodo(x)}
        else {deleteTodo(x)}
      }
      x++
    });

  }

  render() {
    console.log(this.props.todos)
    return (
      <div>
        <h1>TodoList</h1>
        <input type="text" name="ToDo" id="InputTODO" value={this.state.newToDo} onChange={this.handleToDoChange} />
        <input type="button" value="Add" onClick={this.onAdd} />
        <List ToDo={this.props.ToDo} remove={this.handleRemove} />
      </div>
    );
  }

  componentDidMount(){
    fetch('http://localhost:2000/ToDo').then((data) => {
        //console.log(data)
        return data.json()
      }).then((todos) => {
        this.props.loadTodo(todos)
      })
}

}

function mapStateToProps(state) {
  return {
    ToDo: state.ToDo
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: value => dispatch(addTodo(value)),
    loadTodo: value => dispatch(loadTodo(value)),
    doneTodo: id => dispatch(doneTodo(id)),
    deleteTodo: id => dispatch(deleteTodo(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)


