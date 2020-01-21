import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './SimulationList.module.scss';

import SimulationForm from '../SimulationForm/SimulationForm';
import { ModalContext } from '../Modal/ModalProvider';

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

    onClickNewSimulation = (callback) => {
        callback(<SimulationForm/>)
    }

    onClickSimulation = (simulation, callback) => {
        callback(<SimulationForm simulation={simulation}/>)
    }

    render() {
        const { simulations } = this.props;
        const { minified } = this.state;
        return (
            <ModalContext.Consumer>
                {context => (
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
                        <button
                            className={styles.new}
                            onClick={() => this.onClickNewSimulation(context.toggleModal)}
                        >
                            New Simulation
                        </button>
                        <ul>
                            {simulations.map((simulation, index) => (
                                <li
                                    key={index}
                                    onClick={() => this.onClickSimulation( simulation, context.toggleModal)}
                                >
                                    {simulation.title}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </ModalContext.Consumer>
        );
    }
}
