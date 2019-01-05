import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
  constructor(props) {
      super(props);
      this.state = {
          list: [],
          inputvalue: ''
      }
  }

  handleBtnClick(){
    this.setState({
        list: [...this.state.list, this.state.inputvalue],
        inputvalue: ''
    })
  }

  handleInputChange(e) {
      this.setState({
          inputvalue: e.target.value
      })
  }

  handleItemClick(index){
      const list = [...this.state.list];
      list.splice(index, 1);
      this.setState({
          list: list
      })
  }

  //父组件通过属性的形式向子组件传递参数
  //子组件通过props接受父组件传递过来的参数
  render() {
    return (
      <div>
        <div>
          <input value={this.state.inputvalue} onChange={this.handleInputChange.bind(this)}/>
          <button onClick={this.handleBtnClick.bind(this)}>add</button>
        </div>
        <ul>
          {
              this.state.list.map((item, index) => {
                  return <TodoItem key={index} content={item}/>
                  // return <li key={index} onClick={this.handleItemClick.bind(this, index)}>{item}</li>
              })
          }
        </ul>
      </div>
    );
  }
}

export default TodoList;
