import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './FlowForm.module.scss';

export default class FlowForm extends Component {

    static defaultProps = {
        flow: null,
    }

    static propTypes = {
        flow: PropTypes.object,
    }

    state = {
        to: null,
        from: null,
        rateNum: null,
        rateUnit: null,
        rateTimeUnit: null,
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]:e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { } = this.state;
    }

    render() {
        const { flow } = this.props;
        return (
            <form className={styles.flow_form} onSubmit={this.handleSubmit}>
                <div className={styles.title}>
                    {flow ? 'Edit Flow' : 'New Flow'}
                </div>
                <fieldset>
                    <legend>Stocks</legend>
                    <label for='to'>To:</label>
                    <select name='to'>
                        <value></value>
                        <value></value>
                    </select>
                    <label for='from'>From:</label>
                    <select name='from'>
                        <value></value>
                        <value></value>
                    </select>
                </fieldset>
                <fieldset>
                    <legend>Rate</legend>
                    <input
                        type='number'
                        name='rateNum'
                        onChange={this.handleChange}/>
                    <select name='rateUnit' onChange={this.handleChange}>
                        <value>Gallons</value>
                        <value>Liters</value>
                    </select>
                    /
                    <select name='rateTimeUnit' onChange={this.handleChange}>
                        <option value='millisecond'>Millisecond</option>
                        <option value='second'>Second</option>
                        <option value='minute'>Minute</option>
                        <option value='hour'>Hour</option>
                        <option value='day'>Day</option>
                        <option value='year'>Year</option>
                    </select>
                </fieldset>
                <button type='submit'>{flow ? 'Update Flow' : 'Create Flow'}</button>
                <button type='reset'>Reset</button>
            </form>
        );
    }
}
