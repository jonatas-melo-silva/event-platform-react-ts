import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oubxlo0zjo01xtfxwc6s35/master',
  cache: new InMemoryCache()
})
