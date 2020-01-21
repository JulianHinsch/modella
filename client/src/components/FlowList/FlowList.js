import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './FlowList.module.scss';
import FlowForm from '../FlowForm/FlowForm';
import { ModalContext } from '../Modal/ModalProvider';

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

    onClickNewFlow = (callback) => {
        callback(<FlowForm/>);
    }

    onClickFlow = (flow, callback) => {
        callback(<FlowForm flow={flow}/>)
    }

    render() {
        const { flows } = this.props;
        const { minified } = this.state;
        return (
            <ModalContext.Consumer>
                {context => (
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
                        <button className={styles.new} onClick={() => this.onClickNewFlow(context.toggleModal)}>
                            New Flow
                        </button>
                        <ul>
                            {flows.map((flow, index) => (
                                <li key={index} onClick={() => this.onClickFlow(flow, context.toggleModal)}
                                >{flow.fromTitle} -> {flow.toTitle}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </ModalContext.Consumer>
        );
    }
}
