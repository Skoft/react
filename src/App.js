import React, { Component } from 'react';
import Order from './Table/Order'; 

class App extends Component {

  state ={
    filter:'' //Значение фильтра, передаем его в Order
  } 

  changeInput = event => { //Обработчик изменения фильтра (input)
    this.setState({
      filter :event.target.value, 
    });
  
  }

  render() {
    return (
      <div key='1'className="container">
        Фильтр:<input type="text" size="40" onChange = {this.changeInput}></input><br/>
        Заказы:<Order  data = {this.state.filter}/>
      </div>
    );
  }
}

export default App;

