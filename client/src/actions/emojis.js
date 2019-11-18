// import axios from 'axios';

// import {
//     //POST_EMOJI,
//     GET_EMOJIS,
//     //ERROR,
// } from './action_types';

// export const getEmojis = () => async dispatch => {
//     try {
//         const res = await axios.get('/emojis');

//         dispatch({
//             type: GET_EMOJIS,
//             payload: res.data
//         });
//     } catch (err) {
//         dispatch({
//             type: ERROR,
//             payload: { msg: err.response.statusText, status: err.response.status }
//         });
//     }
// };

// // // Get all profiles
// // export const getProfiles = () => async dispatch => {
// //     dispatch({ type: CLEAR_PROFILE });

// //     try {
// //         const res = await axios.get('/api/profiles');

// //         dispatch({
// //             type: GET_PROFILES,
// //             payload: res.data
// //         });
// //     } catch (err) {
// //         dispatch({
// //             type: PROFILE_ERROR,
// //             payload: { msg: err.response.statusText, status: err.response.status }
// //         });
// //     }
// // };