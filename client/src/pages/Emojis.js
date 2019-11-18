// import React, { Component } from 'react';
// import Flexbox from 'flexbox-react';
// import axios from 'axios';
// import Select from 'react-select';
// import { ListOfEmojis } from './ListOfEmojis'

// class Emojis extends Component {
//     state = {
//         loading: true,
//         ListOfEmojis: null,
//         selectedEmoji: null,
//     }

//     async componentDidMount() {

//         const data = { ListOfEmojis };

//         this.setState({ selectedEmoji: data, loading: false });


//     }

//     onSelectEmoji = (event) => {
//         event.preventDefault();
//         this.setState.selectedEmoji;
//     }

//     // onSubmitEmoji = (event) => {
//     //     event.preventDefault();

//     //     console.log("Submitting emoji", this.state.selectedEmoji);

//     //     const res = axios.post('/moods', { emoji: this.state.selectedEmoji });
//     // }

//     render() {
//         return (
//             <div>
//                 <button type="select" onClick={this.state.onSelectEmoji}></button>
//                 <Select
//                     defaultValue={null}
//                     label="Single select"
//                     options={}
//                     theme={theme => ({
//                         ...theme,
//                         borderRadius: 0,
//                         colors: {
//                             ...theme.colors,
//                             primary25: 'lightblue',
//                             primary: 'black',
//                         },
//                     })}
//                 />
//             </div>
//             <div className="emoji-container">

//                 {this.state.loading || !this.state.availableEmojis ? (
//                     <div>loading...</div>
//                 ) : (

//                         this.state.availableEmojis.map(emoji => (
//                             <ul className="emoji-box">
//                                 <li className="emoji-box-item" key="emoji -{emoji.id}">

//                                     <button type="select" onClick={this.state.availableEmojis === this.state.selectedEmoji}></button>

//                                     {this.state.selectedEmoji === emoji.emoji ? " * " : " "} emoji {emoji.emoji}</li>
//                             </ul>
//                         )

//                         ))}
//                 <div>
//                     <button type="submit" onClick=
//                         {this.onSubmitEmoji}>Submit your emoji</button>
//                 </div>
//             </div>

//         );
//     }
// }

// export default Emojis