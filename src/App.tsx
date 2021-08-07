import  { Fragment } from "react";
// import { ApolloProvider } from "react-apollo";
// import {ApolloClient} from "apollo-client";
import {ApolloProvider  } from "@apollo/client";
// import ApolloClient from "apollo-boost";
import gql from 'graphql-tag';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import AppProvider from "@8base-react/app-provider";
// import { Auth } from "@8base-react/app-provider/node_modules/@8base/auth";
// import { AppProvider } from "8base-react-sdk";
// import { BrowserRouter } from "react-router-dom";
// import AuthClient from './shared/auth';

// Components

import NewTask from "./modules/components/Tab/NewTask";
import ResumenTasks from "./modules/ResumenTasks";

import {  Container } from "@material-ui/core";
// import { graphql } from "react-apollo";
import HeaderApp from "./modules/components/Header/HeaderApp";
import { client } from "./shared/api";

// import { IAuthClient } from ''
// import { AuthCallback } from './modules/auth/index';


function App() {
  return (

    <ApolloProvider client={client}>
        <Router>
          <Fragment>
            <HeaderApp />
              <Container maxWidth="lg">
                <Switch>
                  <Route exact path="/" component={ResumenTasks} />
                  <Route exact path="/tasks/new" component={NewTask} />
                </Switch>
              </Container>
          </Fragment>
        </Router>
    </ApolloProvider>
  );
}



export default App;

/* class App extends React.PureComponent {
  state = {};

  onRequestSuccess = () => {
    console.log('chido');
  };

  onRequestError = () => {
    console.log('chido');
  };

  render() {
    const { onRequestError, onRequestSuccess } = this;
    
    const { REACT_APP_WORKSPACE_ENDPOINT } = process.env;

    return (
      <AppProvider
        uri={REACT_APP_WORKSPACE_ENDPOINT!}
        // authClient={AuthClient}
        onRequestSuccess={onRequestSuccess}
        onRequestError={onRequestError}
      >
        <BrowserRouter>
          <Container maxWidth="lg">
            <Switch>
              <Route exact path="/" component={ResumenTasks} />
              <Route exact path="/tasks/new" component={NewTask} />
            </Switch>
          </Container>
        </BrowserRouter>
      </AppProvider>
    );
  }
}

export { App }; */
