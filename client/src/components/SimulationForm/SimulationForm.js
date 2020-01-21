import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './SimulationForm.module.scss';

export default class SimulationForm extends Component {

    static defaultProps = {
        simulation: null,
    }

    static propTypes = {
        simulation: PropTypes.object,
    }

    state = {
        startDate: null,
        endDate: null,
        durationNumber: null,
        durationTimeUnit: null,
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]:e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { } = this.state;
    }

    render() {
        const { simulation } = this.props;
        return (
            <form className={styles.simulation_form} onSubmit={this.handleSubmit}>
                <div className={styles.title}>
                    {simulation ? 'Edit Simulation' : 'New Simulation'}
                </div>
                <fieldset>
                    <legend>Timing</legend>
                    <label for='startDate'>Start Date</label>
                    <input
                        type='date'
                        name='startDate'
                        onChange={this.handleChange}/>
                    <label for='endDate'>End Date</label>
                    <input
                        type='date'
                        name='endDate'
                        onChange={this.handleChange}/>
                </fieldset>
                <fieldset>
                    <legend>Duration</legend>
                    <input type='number' name='durationNumber'/>
                    <select name='durationTimeUnit' onChange={this.handleChange}>
                        <option value='millisecond'>Milliseconds</option>
                        <option value='second'>Seconds</option>
                        <option value='minute'>Minutes</option>
                        <option value='hour'>Hours</option>
                        <option value='day'>Days</option>
                        <option value='year'>Years</option>
                    </select>
                </fieldset>
                <button type='submit'>{simulation ? 'Update Simulation' : 'Create Simulation'}</button>
                <button type='reset'>Reset</button>
            </form>
        );
    }
}
