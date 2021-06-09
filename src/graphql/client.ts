import {
  ApolloCache,
  ApolloClient,
  HttpLink,
  InMemoryCache,
  concat,
  NormalizedCacheObject
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import fetch from 'cross-fetch';

const createApolloClient = (isServer: boolean) => {
  const httpLink = new HttpLink({ uri: process.env.REACT_APP_GRAPHQL, fetch });

  const authLink = setContext(async (_, { headers }) => {
    return {
      headers: {
        ...headers,
        mode: 'no-cors',
        'Access-Control-Allow-Origin': '*'
      }
    };
  });

  // const cache = new InMemoryCache({}).restore(
  //   !isServer ? (window as any).__APOLLO_STATE__ : {}
  // ) as ApolloCache<NormalizedCacheObject>;
  const cache = new InMemoryCache({}).restore({}) as ApolloCache<NormalizedCacheObject>;

  const client = new ApolloClient<NormalizedCacheObject>({
    cache,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-first'
      }
    },
    link: concat(authLink, httpLink),
    ssrMode: isServer,
    ssrForceFetchDelay: isServer ? 100 : undefined
  });
  return { client, cache };
};

export default createApolloClient;
