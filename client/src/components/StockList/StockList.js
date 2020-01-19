import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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

    render() {
        const { stocks } = this.props;
        const { minified } = this.state;
        return (
            <div className={classNames(styles.stock_list, { [styles.minified]: minified })}>
                <div className={styles.header} onClick={this.onClickHeader}>
                    Stocks
                </div>
                {stocks.length === 0 && (
                    <p className={styles.zero_state}>No Stocks</p>
                )}
                <button className={styles.new} onClick={this.onClickNew}>
                    New Stock
                </button>
                <ul>
                    {/* {stocks.map(stock => (
                        <Stock/>
                    ))} */}
                </ul>
                
            </div>
        );
    }
}
