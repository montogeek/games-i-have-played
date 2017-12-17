import express from 'express'
import graphqlHTTP from 'express-graphql'
import { buildSchema } from 'graphql'
import schema from './schema'

import path from 'path'

var app = express()

// app.use('/dist', express.static(path.join(__dirname, '..', 'client', 'dist')))

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
)

// app.use('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '..', 'client', 'index.html'))
// })

app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'))
