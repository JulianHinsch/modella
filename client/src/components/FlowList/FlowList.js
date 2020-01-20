import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './FlowList.module.scss';

export default class FlowList extends Component {

    static propTypes = {
        flows: PropTypes.array.isRequired,
    }

    state = {
        minified: true,
    }

    onClickHeader = () => {
        this.setState(prevState => ({ minified: !prevState.minified}));
    }

    render() {
        const { flows } = this.props;
        const { minified } = this.state;
        return (
            <div className={classNames(styles.flow_list, { [styles.minified]: minified })}>
                <div className={styles.header} onClick={this.onClickHeader}>
                    Flows {minified ? (
                        <img src={require('../../assets/chevron-right.svg')}/>
                    ) : (
                        <img src={require('../../assets/chevron-down.svg')}/>
                    )}
                </div>
                {flows.length === 0 && (
                    <p className={styles.zero_state}>No Flows</p>
                )}
                <button className={styles.new} onClick={this.onClickNew}>
                    New Flow
                </button>
                <ul>
                    {flows.map(flow => (
                        <li>{flow.fromTitle} -> {flow.toTitle}</li>
                    ))}
                </ul>
            </div>
        );
    }
}
