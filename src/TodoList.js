import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
      super(props);
      this.state = {
          list: [
              'learn react',
              'learn vue',
              'learn python'
          ]
      }
  }

  handleBtnClick(){
    this.setState({
        list: [...this.state.list, 'learn spring boot']
    })
  }
  render() {
    return (
      <div>
        <div>
          <input/>
          <button onClick={this.handleBtnClick.bind(this)}>add</button>
        </div>
        <ul>
          {
              this.state.list.map((item, index) => {
                  return <li key={index}>{item}</li>
              })
          }
        </ul>
      </div>
    );
  }
}

export default TodoList;
