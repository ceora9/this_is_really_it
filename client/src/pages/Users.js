import React, { Component, Fragment } from 'react';
import axios from 'axios';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }
    componentDidMount() {
        fetch('/users')
            .then(res => res.json())
            .then(data =>
                this.setState({ data }, () => console.log("Users...", data)));
    }
    render() {
        return (
            <div>
                <Fragment>
                    {this.state.data.map(user => (
                        <ul>
                            <li key="user -{user.id}">user last_name {user.last_name}</li>
                        </ul>
                    ))}
                </Fragment>
            </div>
        );
    }
}
export default Users;