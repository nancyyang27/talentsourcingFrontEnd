// import type { AppProps } from 'next/app';
// import { ChakraProvider } from '@chakra-ui/react';
// import { ApolloProvider } from '@apollo/client';
// import { useEffect } from 'react';
// import Amplify, { Auth } from 'aws-amplify';
// import { createAppSyncClient } from '../appsync/AppSyncClient';
// import amplifyConfig from '../deployment/amplify-config';

// Amplify.configure(amplifyConfig);

// function App({ Component, pageProps, router }: AppProps) {
//   const validateUserSession = async () => {
//     try {
//       await Auth.currentSession();
//     } catch (error) {
//       console.error(error);
//       router.push('/signin');
//     }
//   };

//   const getUserSession = async () => {
//     try {
//       await Auth.currentSession();
//     } catch (error) {
//       router.push('/signin');
//     }
//   };

//   useEffect(() => {
//     getUserSession();
//   }, []);

//   return (
//     <ChakraProvider>
//       <ApolloProvider client={createAppSyncClient(validateUserSession)}>
//         <Component {...pageProps} />
//       </ApolloProvider>
//     </ChakraProvider>
//   );
// }

// export default App;
// import type { AppProps } from 'next/app';
// import { ChakraProvider } from '@chakra-ui/react';
// import { ApolloProvider } from '@apollo/client';
// import { useEffect } from 'react';
// import Amplify, { Auth } from 'aws-amplify';
// import { createAppSyncClient } from '../appsync/AppSyncClient';
// import amplifyConfig from '../deployment/amplify-config';

// Amplify.configure(amplifyConfig);

// function App({ Component, pageProps, router }: AppProps) {
//   const validateUserSession = async () => {
//     try {
//       await Auth.currentSession();
//     } catch (error) {
//       console.error(error);
//       router.push('/signin');
//     }
//   };

//   const getUserSession = async () => {
//     try {
//       await Auth.currentSession();
//     } catch (error) {
//       router.push('/signin');
//     }
//   };

//   useEffect(() => {
//     getUserSession();
//   }, []);

//   return (
//     <ChakraProvider>
//       <ApolloProvider client={createAppSyncClient(validateUserSession)}>
//         <Component {...pageProps} />
//       </ApolloProvider>
//     </ChakraProvider>
//   );
// }

// export default App;

import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { ApolloProvider } from '@apollo/client';
import { useEffect } from 'react';
import Amplify, { Auth } from 'aws-amplify';
import { createAppSyncClient } from '../appsync/AppSyncClient';
import amplifyConfig from '../deployment/amplify-config';
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";

Amplify.configure(amplifyConfig);

interface Props {
  signOut: () => void;
}

const App: React.FC<Props> = ({ signOut }) => {
  return (
    <View className="App">
      <Card>
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

export default withAuthenticator(App);