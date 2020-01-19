import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './MyComponent.module.scss';

export default class MyComponent extends Component {

    static propTypes = {

    }

    state = {

    }

    render() {
        const { } = this.props;
        return (
            <div className={styles.my_component}>

            </div>
        );
    }
}
