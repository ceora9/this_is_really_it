const { pool } = require('./db')
require('dotenv').config()

//USERS

const getUsers = (request, response) => {
    pool.connect().then(client => {
        client.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).json(results.rows)
        })
    });
}

const getUserById = (request, response) => {
    const id = parseInt(request.params.id)
    pool.connect().then(client => {
        client.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).json(results.rows)
        })
    });
}

const createUser = (request, response) => {
    const { last_name, first_name, email, account_type } = request.body
    pool.connect().then(client => {
        client.query('INSERT INTO users (last_name, first_name, email, account_type) VALUES ($1, $2, $3, $4)', [last_name, first_name, email, account_type], (error, results) => {
            if (error) {
                throw error
            }
            response.status(201).send(`User ${first_name, last_name} successfully added.`)
        })
    });
}

const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { last_name, first_name, email, account_type } = request.body
    pool.connect().then(client => {
        client.query(
            'UPDATE users SET last_name = $1, first_name = $2, email = $3, account_type = $4 WHERE id = $5',
            [last_name, first_name, email, account_type, id],
            (error, result) => {
                if (error) {
                    throw error
                }
                response.status(200).send(`User modified with ID: ${id}`)
            }
        )
    });
}

const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { last_name, first_name, email, account_type } = request.body
    pool.connect().then(client => {
        client.query(
            'DELETE FROM users WHERE id = $1', [id], (error, result) => {
                if (error) {
                    throw error
                }
                response.status(200).send(`User deleted with ID: ${id}`)
            })
    });
}

//EMOJIS

const getEmojis = (request, response) => {
    pool.connect().then(client => {
        client.query('SELECT * FROM emojis', (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).json(results.rows)
        })
    });
}

const getEmojiById = (request, response) => {
    const id = parseInt(request.params.id)
    pool.connect().then(client => {
        client.query('SELECT * FROM emojis WHERE id = $1', [id], (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).json(results.rows)
        })
    });
}

const createEmoji = (request, response) => {
    const { emoji } = request.body
    pool.connect().then(client => {
        client.query('INSERT INTO emojis (emoji) VALUES ($1)', [emoji], (error, results) => {
            if (error) {
                throw error
            }
            response.status(201).send(`Emoji "${emoji}" successfully added.`)
        })
    });
}

const deleteEmoji = (request, response) => {
    const id = parseInt(request.params.id)
    const { emoji } = request.body
    pool.connect().then(client => {
        client.query(
            'DELETE FROM emojis WHERE id = $1', [id], (error, result) => {
                if (error) {
                    throw error
                }
                response.status(200).send(`Emoji deleted with ID: ${id}`)
            })
    });
}

//MOODS

//Add params for getMoods - by user id, class, etc.
const getMoods = (request, response) => {
    pool.connect().then(client => {
        client.query('SELECT * FROM moods ORDER BY id ASC', (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).json(results.rows)
        })
    });
}

const getMoodsById = (request, response) => {
    const id = parseInt(request.params.id)
    pool.connect().then(client => {
        client.query('SELECT * FROM moods WHERE id = $1', [id], (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).json(results.rows)
        })
    });
}

const sendToMoods = (request, response) => {
    const { emoji } = request.body
    console.log('@@@', emoji);
    pool.connect().then(client => {
        client.query('INSERT INTO moods (emoji) VALUES ($1)', [emoji], (error, results) => {
            if (error) {
                throw error
            }
            console.log(results);
            response.status(201).send(`${emoji} successfully added.`)
        })
    });
}

//PROMPTS

const getPrompts = (request, response) => {
    pool.connect().then(client => {
        client.query('SELECT * FROM promopts ORDER BY id ASC', (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).json(results.rows)
        })
    });
}

const getPromptById = (request, response) => {
    const id = parseInt(request.params.id)
    pool.connect().then(client => {
        client.query('SELECT * FROM prompts WHERE id = $1', [id], (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).json(results.rows)
        })
    });
}

const createPrompt = (request, response) => {
    const { prompt } = request.body
    pool.connect().then(client => {
        client.query('INSERT INTO prompts (prompt) VALUES ($1)', [prompt], (error, results) => {
            if (error) {
                throw error
            }
            response.status(201).send(`Prompt successfully added.`)
        })
    });
}

const updatePrompt = (request, response) => {
    const id = parseInt(request.params.id)
    const { prompt } = request.body
    pool.connect().then(client => {
        client.query(
            'UPDATE prompts SET prompt = $1 WHERE id = $2',
            [prompt, id],
            (error, result) => {
                if (error) {
                    throw error
                }
                response.status(200).send(`Prompt modified with ID: ${id}`)
            }
        )
    });
}

const deletePrompt = (request, response) => {
    const id = parseInt(request.params.id)
    const { prompt } = request.body
    pool.connect().then(client => {
        client.query(
            'DELETE FROM prompts WHERE id = $1', [id], (error, result) => {
                if (error) {
                    throw error
                }
                response.status(200).send(`Prompt deleted with ID: ${id}`)
            })
    });
}

//TRANSITIONS

const getTransitions = (request, response) => {
    pool.connect().then(client => {
        client.query('SELECT * FROM transitions ORDER BY id ASC', (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).json(results.rows)
        })
    });
}

const getTransitionById = (request, response) => {
    const id = parseInt(request.params.id)
    pool.connect().then(client => {
        client.query('SELECT * FROM transitions WHERE id = $1', [id], (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).json(results.rows)
        })
    });
}

const createTransition = (request, response) => {
    const { transition } = request.body
    pool.connect().then(client => {
        client.query('INSERT INTO transitions VALUES ($1)', [transition], (error, results) => {
            if (error) {
                throw error
            }
            response.status(201).send(`Transition "${transition}" successfully added.`)
        })
    });
}

const updateTransition = (request, response) => {
    const id = parseInt(request.params.id)
    const { transition } = request.body
    pool.connect().then(client => {
        client.query(
            'UPDATE transitions SET transition = $1 WHERE id = $2',
            [transition, id],
            (error, result) => {
                if (error) {
                    throw error
                }
                response.status(200).send(`Transition modified with ID: ${id}`)
            }
        )
    });
}

const deleteTransition = (request, response) => {
    const id = parseInt(request.params.id)
    const { transition } = request.body
    pool.connect().then(client => {
        client.query(
            'DELETE FROM transitions WHERE id = $1', [id], (error, result) => {
                if (error) {
                    throw error
                }
                response.status(200).send(`Transition deleted with ID: ${id}`)
            })
    });
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    getEmojis,
    getEmojiById,
    createEmoji,
    deleteEmoji,
    getMoods,
    getMoodsById,
    sendToMoods,
    getPrompts,
    getPromptById,
    createPrompt,
    updatePrompt,
    deletePrompt,
    getTransitions,
    getTransitionById,
    createTransition,
    updateTransition,
    deleteTransition,
}