import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './StockForm.module.scss';

export default class StockForm extends Component {

    static defaultProps = {
        simulation: null,
    }

    static propTypes = {
        simulation: PropTypes.object,
    }

    state = {
        initialValue: null,
        unit: null,
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]:e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { } = this.state;
    }

    render() {
        const { stock } = this.props;
        return (
            <form className={styles.stock_form} onSubmit={this.handleSubmit}>
                <div className={styles.title}>
                    {stock ? 'Edit Stock' : 'New Stock'}
                </div>
                <fieldset>
                    <legend>Values</legend>
                    <label for='initialValue'>Initial Value</label>
                    <input
                        type='number'
                        name='initialValue'
                        onChange={this.handleChange}/>
                    <label for='endDate'>End Date</label>
                </fieldset>
                <fieldset>
                    <legend>Unit</legend>
                    <select name='unit' onChange={this.handleChange}>
                    </select>
                </fieldset>
                <button type='submit'>{stock ? 'Update Stock' : 'Create Stock'}</button>
                <button type='reset'>Reset</button>
            </form>
        );
    }
}
