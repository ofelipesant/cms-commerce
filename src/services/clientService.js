import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl52v592f2ga901ui10qyg2kn/master',
    cache: new InMemoryCache()
})