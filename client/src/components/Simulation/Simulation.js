import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Simulation.module.scss';

export default class Simulation extends Component {

    static propTypes = {

    }

    state = {
        stocks: [],
        interval: null,
    }

    componentDidMount() {
        this.reset();
    }

    step = () => {
        const { stocks, flows } = this.props;
        // TODO this is n2 but using hash we can update stocks O(1) so that would be better
        flows.forEach(flow => {
            this.state.stocks.forEach(stock => {
                if (flow.from === stock.id) {
                    stock.value -= flow.rate;
                } else if (flow.to === stock.id) {
                    stock.value += flow.rate;
                }
            })
        })
    }

    play = () => {
        this.setState({ interval: window.setInterval(this.step, 100) });
    }

    pause = () => {
        window.clearInterval(this.state.interval);
    }

    reset = () => {
        this.setState({ stocks: this.props.stocks });
    }

    render() {
        const { } = this.props;
        return (
            <div className={styles.simulation}>
                <div className={styles.controls}>
                    <button onClick={this.play}>Play</button>
                    <button onClick={this.pause}>Pause</button>
                    <button onClick={this.reset}>Reset</button>
                </div>
            </div>
        );
    }
}
