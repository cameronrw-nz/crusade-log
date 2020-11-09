import { GraphQLServer } from 'graphql-yoga'
import { PrismaClient } from '@prisma/client'

import * as Query from './Resolvers/Query'
import * as CrusadeArmy from './Resolvers/CrusadeArmy'
import * as BattleHonour from './Resolvers/BattleHonour'
import * as OtherTrait from './Resolvers/OtherTrait'
import * as CrusadeUnit from './Resolvers/CrusadeUnit'
import * as Mutation from './Resolvers/Mutation'
import { ContextCallback, ContextParameters } from 'graphql-yoga/dist/types'

const prisma = new PrismaClient()

const resolvers = {
    Query,
    CrusadeArmy,
    CrusadeUnit,
    BattleHonour,
    OtherTrait,
    Mutation
}

export interface ServerContext extends ContextParameters {
    prisma: typeof prisma
}

const context: ContextCallback = (request): ServerContext => {
    return {
        ...request,
        prisma,
    }
}

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: context,
})

server.start(() => console.log(`Server is running on http://localhost:4000`))