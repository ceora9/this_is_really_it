import axios from 'axios';
import React, { Component } from 'react'

class ListOfEmojis extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            emojis: null,
        }
    }

    componentDidMount() {
        this.getAvailableEmojis()
            .then(res => {
                this.handleReturnedEmojis(res);
            });
    }

    getAvailableEmojis() {
        this.setState(
            {
                isLoading: true
            }
        );

        return axios.get('/emojis').then(function (response) {
            return response.data;
        })
    }

    handleReturnedEmojis(emojiData) {
        this.setState(
            {
                emojis: emojiData,
                isLoading: false
            }
        );
    }

    render() {

        if (this.state.isLoading || !this.state.emojis) {
            return <div>Emoji list is loading...</div>;
        }

        return (
            <div>
                {
                    this.state.emojis.map((currentEmoji) => {

                        let emojiString = currentEmoji.emoji;

                        if (emojiString === this.props.selectedEmoji) {
                            emojiString += '*';
                        }

                        return emojiString;
                    })
                }
            </div>
        )
    }
}

export default ListOfEmojis;