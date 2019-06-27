import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Launches from './components/Launches'
import Launch from './components/Launch'
import logo from './SpaceX_Logo_Black.png';
import './App.css';

const client = new ApolloClient({
	uri: 'http://localhost:5000/graphql'
});

export default function App() {
  return (
  	<ApolloProvider client={client}>
  		<Router>
		    <div className="container mt-4">
		      <img src={logo} alt="SpaceX" style={{width: 525, display:"block", margin:"auto"}}/>
		      <Route exact path="/" component={Launches} />
		      <Route exact path="/launch/:flight_number" component={Launch} />
		    </div>
	    </Router>
    </ApolloProvider>
  );
}
