import React, { Component } from 'react';

import styles from './Modal.module.scss';

import { noop } from '../../util';

export const ModalContext = React.createContext({
    modalOpen: false,
    toggleModal: noop,
});

export default class ModalProvider extends Component {

    state = {
        modalOpen: false,
        modalContent: null,
    }

    toggleModal = (modalContent) => {
        this.setState(prevState => ({
            modalOpen: !prevState.modalOpen,
            modalContent,
        }));
    }

    render() {
        const { children } = this.props;
        const { modalOpen, modalContent } = this.state;
        return (
            <ModalContext.Provider value={{ modalOpen, toggleModal: this.toggleModal }}>
                {modalOpen && (
                    <div className={styles.modal_wrap}>
                        <div className={styles.backdrop} onClick={this.toggleModal} />
                        <div className={styles.modal}>
                            {modalContent}
                        </div>
                    </div>
                )}
                {children}
            </ModalContext.Provider>
        );
    }
}
