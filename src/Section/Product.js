import React, { Component } from 'react';
import './Product.css'



class Product extends Component {
    state = {
        orderInfo: [], //Массив , полученный из API, содержащий товары из заказа с определенным ID
    }

    async componentDidMount() {
        const response = await fetch(`http://127.0.0.1:8080/api/order/${this.props.data}`); //Запрос на сервер {data} = id заказа
        const orderInfo = await response.json();
        this.setState({
            orderInfo
        })
    }

    render() {
        return (
            <>

                {
                    this.state.orderInfo.map(item => ( //проходим по элементам массива с товарами и отрисовываем их
                        <tbody key={item.name}>
                            <table id='table'>
                                <tr>
                                    <td>{item.name}</td> 
                                    <td>{item.price}</td>
                                    <td>{item.qty}</td>
                                    <td>{item.sum}</td>
                                </tr>
                            </table>
                        </tbody>))
                }
            </>
        );
    }
}
export default Product;


