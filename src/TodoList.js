import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
  constructor(props) {
      super(props);
      this.state = {
          list: [],
          inputvalue: ''
      }

      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleBtnClick = this.handleBtnClick.bind(this);
      this.handleDelete = this.handleDelete.bind(this);
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

  // handleItemClick(index){
  //     const list = [...this.state.list];
  //     list.splice(index, 1);
  //     this.setState({
  //         list: list
  //     })
  // }

  handleDelete(index) {
      const list = [...this.state.list];
      list.splice(index, 1);
      this.setState({
          list: list
      })
  }

  getTdoItems() {
      return (
          this.state.list.map((item, index) => {
              return (<TodoItem
                  delete={this.handleDelete}
                  key={index}
                  content={item}
                  index={index}/>)
              // return <li key={index} onClick={this.handleItemClick.bind(this, index)}>{item}</li>
          })
      )
  }

  //父组件通过属性的形式向子组件传递参数
  //子组件通过props接受父组件传递过来的参数
  render() {
    return (
      <div>
        <div>
          <input value={this.state.inputvalue} onChange={this.handleInputChange}/>
          <button onClick={this.handleBtnClick}>add</button>
        </div>
        <ul>{this.getTdoItems()}</ul>
      </div>
    );
  }
}

export default TodoList;
