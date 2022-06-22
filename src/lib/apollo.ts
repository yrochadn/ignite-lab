import {ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oxx84617v901xtgdzvgpiz/master',
    cache: new InMemoryCache()
})