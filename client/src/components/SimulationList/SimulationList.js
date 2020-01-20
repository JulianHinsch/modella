import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './SimulationList.module.scss';

export default class SimulationList extends Component {

    static propTypes = {
        simulations: PropTypes.array.isRequired,
    }

    state = {
        minified: true,
    }

    onClickHeader = () => {
        this.setState(prevState => ({ minified: !prevState.minified}));
    }

    render() {
        const { simulations } = this.props;
        const { minified } = this.state;
        return (
            <div className={classNames(styles.simulation_list, { [styles.minified]: minified })}>
                <div className={styles.header} onClick={this.onClickHeader}>
                    Simulations {minified ? (
                        <img src={require('../../assets/chevron-right.svg')}/>
                    ) : (
                        <img src={require('../../assets/chevron-down.svg')}/>
                    )}
                </div>
                {simulations.length === 0 && (
                    <p className={styles.zero_state}>No Simulations</p>
                )}
                <button className={styles.new} onClick={this.onClickNew}>
                    New Simulation
                </button>
                <ul>
                    {simulations.map((simulation, index) => (
                        <li>{simulation.title}</li>
                    ))}
                </ul>
            </div>
        );
    }
}
