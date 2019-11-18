import React, { Component } from 'react';
import ListOfEmojis from './ListOfEmojis';

class SelectEmoji extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedEmoji: '',
            clearable: true,
            emoji: [],
        }
    }

    handleChange(selectedEmoji) {
        this.setState({ selectedEmoji });
    }

    render() {
        return (
            <div>
                <ListOfEmojis selectedEmoji={this.state.selectedEmoji} />
            </div>
        );
    }
}

export default SelectEmoji