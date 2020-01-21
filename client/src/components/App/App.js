import React, { Component } from 'react';

import styles from './App.module.scss';

import Project from '../Project/Project';
import ModalProvider, { ModalContext } from '../Modal/ModalProvider';

export default class App extends Component {
    render() {
        return (
            <ModalProvider value={ModalContext}>
                <div className={styles.app}>
                    <Project/>
                </div>
            </ModalProvider>
        );
    }
}
