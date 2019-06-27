import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Launches from './components/Launches'
import logo from './SpaceX_Logo_Black.png';
import './App.css';

const client = new ApolloClient({
	uri: 'http://localhost:5000/graphql'
});

function App() {
  return (
  	<ApolloProvider client={client}>
	    <div className="container mt-4">
	      <img src={logo} alt="SpaceX" style={{width: 525, display:'block', margin:'auto'}}/>
	    </div>
	    <Launches />
    </ApolloProvider>
  );
}

export default App;