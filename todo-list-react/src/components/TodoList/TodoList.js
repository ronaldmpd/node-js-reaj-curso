import { Component } from 'react';

class TodoList extends Component {

    constructor(props){
        super(props);        
        this.state ={
            value: '',            
            list: ['uno', 'dos']
        }
    }

    onChangeValue = event => {
        this.setState({ value: event.target.value });
      };

      onAddItem = () => {
        // not allowed AND not working
        this.setState(state => {
          let listArray = state.list.push(state.value);     
          return {            
            value: '',            
            list: listArray,
          };
        });
      };

      onDeleteItem = (index) => {
        // not allowed AND not working
        this.setState(state => {
          let listArray = state.list.splice(index, 1);     
          return {            
            value: '',
            list: listArray,
          };
        });
      };


    render () {               
        return (
            <div><h2>Todo List</h2>
            <input type="text" value={this.state.value} onChange={this.onChangeValue} />
             <button type="button"  onClick={this.onAddItem}> Add Task </button>
             <ul>
                {
                    this.state.list.map(function(value, index) {
                        return <li key={index}> <input type="checkbox" id={index} name={index} />  {value}   <button id={index} name={index} > Delete</button> </li>
                    })
                }
            </ul>
            </div>            
        );
    }
}

export default TodoList;