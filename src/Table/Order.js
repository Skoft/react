import React, { Component } from 'react';
import Product from '../Section/Product'

class Order extends Component {
    state = {
        isOpen: false, //Значения для проверки (развернут ли заказ или нет)
        whoOpen: null, //Номер развернутого заказа
        data: [] //Список заказов из полученный из API
    }

    async componentDidUpdate(prevProps) {
        if (this.props.data !== prevProps.data) {
            const response = await fetch(`http://127.0.0.1:8080/api/order?filter=${this.props.data}`); //Получение отфильтрованного заказа из API
            const data = await response.json();
            this.setState({
                data
            })
        }
    }
    async componentDidMount() {
        console.log(`Order.js: => componentDidMount() => ${this.props.data}`);
        const response = await fetch(`http://127.0.0.1:8080/api/order`);
        const data = await response.json();
        this.setState({
            data
        })
    }

    onClicked = id => { //Обработчик нажатия кнопки на Заказе
        this.setState({
            isOpen: true,
            whoOpen: id
        })
    }

    render() {
        return (
            <>
                {this.state.data.map(item => (
                    <div key={item.id + item.id} ><table>
                        <tbody>
                            <tr>
                                <td onClick={this.onClicked.bind(null, item.id)}><button src=''></button></td>
                                <td>{item.id}</td>
                                <td>{item.description}</td>
                                <td>{item.docDate}</td>
                                <td>{item.docNum}</td>
                            </tr>
                        </tbody>
                    </table>
                        {
                            ((this.state.isOpen === true) & (this.state.whoOpen === item.id))
                                ? <><Product data={this.state.whoOpen} /></>
                                : null
                        }
                    </div>
                ))
                }
            </>
        )

    }
}
export default Order;
