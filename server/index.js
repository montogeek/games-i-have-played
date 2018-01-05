import express from 'express'
import graphqlHTTP from 'express-graphql'
import { buildSchema } from 'graphql'
import schema from './schema'

import path from 'path'

var app = express()

app.use('/', express.static(path.join(__dirname, '..', 'client', 'dist')))

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
)

app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'))
