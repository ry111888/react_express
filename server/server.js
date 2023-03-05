const express = require('express')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const axios = require('axios')
const cors = require('cors')

dotenv.config()
const app = express()
const port = process.env.PORT || 3000
const apiToken = process.env.TOKEN
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use(bodyParser.json())
app.use(cors())

app.post('/', (req, res) => {
    const inputText = req.body.text.text
    axios.post('https://api.openai.com/v1/completions', {
        model: "text-davinci-003",
        prompt: inputText
    }, {headers:{Authorization: `Bearer ${apiToken}`}})
        .then((response) => {
            if (response.status !== 200) {
                res.send('Error')
            } {
                res.send(response.data.choices[0].text)
                console.log(response.data)
            }
        })

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})