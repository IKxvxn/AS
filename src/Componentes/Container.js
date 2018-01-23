import React, { Component } from 'react';
import List from'./List.js'

class Container extends Component {
    constructor(props) {
      super(props);
      this.state = {ToDo:[{Value:"Madurar",Key:"0",Done:false},{Value:"No consumir el oxígeno de otros",Key:"1",Done:false}]};
    }
  
    render() {
      return (
        <div>
            <h1>TodoList</h1>
            <form>
                <label>
                    <input type="text" name="name" />
                </label>
                    <input type="submit" value="Submit" />
            </form>
            <List ToDo = {this.state.ToDo} />
        </div>
      );
    }
  }

export default Container;


