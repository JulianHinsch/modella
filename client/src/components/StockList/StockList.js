import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import StockForm from '../StockForm/StockForm';
import { ModalContext } from '../Modal/ModalProvider';

import styles from './StockList.module.scss';

export default class StockList extends Component {

    static propTypes = {
        stocks: PropTypes.array.isRequired,
    }

    state = {
        minified: true,
    }

    onClickHeader = () => {
        this.setState(prevState => ({ minified: !prevState.minified}));
    }

    onClickNewStock = (callback) => {
        callback(<StockForm/>)
    }

    onClickStock = (stock, callback) => {
        callback(<StockForm stock={stock}/>)
    }

    render() {
        const { stocks } = this.props;
        const { minified } = this.state;
        return (
            <ModalContext.Consumer>
                {context => (
                    <div className={classNames(styles.stock_list, { [styles.minified]: minified })}>
                        <div className={styles.header} onClick={this.onClickHeader}>
                            Stocks {minified ? (
                                <img src={require('../../assets/chevron-right.svg')}/>
                            ) : (
                                <img src={require('../../assets/chevron-down.svg')}/>
                            )}
                        </div>
                        {stocks.length === 0 && (
                            <p className={styles.zero_state}>No Stocks</p>
                        )}
                        <button className={styles.new} onClick={() => this.onClickNewStock(context.toggleModal)}>
                            New Stock
                        </button>
                        <ul>
                            {stocks.map((stock, index) => (
                                <li key={index} onClick={() => this.onClickStock(stock, context.toggleModal)}>
                                    {stock.title}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </ModalContext.Consumer>
        );
    }
}
