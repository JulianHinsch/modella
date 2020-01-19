import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './MyForm.module.scss';

export default class MyForm extends Component {

    static propTypes = {

    }

    state = {

    }

    handleChange = (e) => {
        this.setState({ [e.target.name]:e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { } = this.state;
    }

    render() {
        const { } = this.props;
        return (
            <form className={styles.my_form} onSubmit={this.handleSubmit}>
                <label for=''></label>
                <input name='' type='text' onChange={this.handleChange}/>
                <button type='submit'></button>
                <button type='reset'></button>
            </form>
        );
    }
}
