const express = require('express');
// const bodyParser = require('body-parser');
const app = express();
const db = require('./queries');
const axios = require('axios');
const http = require('http');
const path = require('path');
const cors = require('cors');



app.use(express.json({ extended: true }));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/users', db.getUsers);
app.get('/users/:id', db.getUserById);
app.post('/users', db.createUser);
app.put('/users/:id', db.updateUser);
app.delete('/users/:id', db.deleteUser);

app.get('/emojis', db.getEmojis);
app.get('/emojis/:id', db.getEmojiById);
app.post('emojis', db.createEmoji);
app.delete('/emojis/:id', db.deleteEmoji);

app.get('/moods', db.getMoods);
//app.get('/moods/:id', db.getMoodById);
app.post('/moods', db.sendToMoods);

app.get('/prompts', db.getPrompts);
app.get('/prompts/:id', db.getPromptById);
app.post('/prompts', db.createPrompt);
app.put('/prompts/:id', db.updatePrompt);
app.delete('/prompts/:id', db.deletePrompt);


//CHANGE THESE 
// app.get('/transitions', db.getTransitions);
// app.get('/transitions/:id', db.getTransitionById);
// app.post('/transitions', db.createTransition);
// app.put('/transitions/:id', db.updateTransition);
// app.delete('/transitions/:id', db.deleteTransition);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Hooray, you are running on port ${PORT}!`));