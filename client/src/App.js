import React from 'react';
import { ApolloProvider } from "@apollo/client"
import ApolloClient from "apollo-boost";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DasboardPage'
import Auth from './utils/auth';

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token');
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  uri: '/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Navbar />
          <Switch>
          {Auth.loggedIn() ? (
            <>
              <Route exact path="/" component={DashboardPage} />
            </>
          ) : (
            <>
              <Route exact path="/" component={LandingPage} />
            </>
          )}
            <Route render={() => <h1 className="display-2">Wrong page!</h1>} />
          </Switch>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
