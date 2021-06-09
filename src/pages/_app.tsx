import { Provider as ReduxProvider} from 'react-redux';
import { useStore } from '../store';
import { hydrate } from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ApolloProvider } from '@apollo/client';
import createApolloClient from '../graphql/client';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import GlobalStyles from 'styles/styled';

export default function App({ Component, pageProps }) {
  
  const store = useStore(pageProps.initialReduxState);
  const { client } = createApolloClient(false) as any;

  return (
    <HelmetProvider>
      <ReduxProvider store={store}>
        <ApolloProvider client={client}>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            
              <Component {...pageProps} />
            
          </ThemeProvider>
        </ApolloProvider>
      </ReduxProvider>
    </HelmetProvider>
  );
}
