import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';
import * as queries from './graphql/queries';
import * as mutations from './graphql/mutations';

Auth.configure(awsconfig);
API.configure(awsconfig);

Auth.configure(awsconfig);

function App() {
  const allTodos = API.graphql(graphqlOperation(queries.listTodos));
  console.log(allTodos);

  const oneTodo = API.graphql(
    graphqlOperation(queries.getTodo, {
      id: '79f419b2-edd8-4a7a-b67f-c9aebc3b75c8',
    })
  );
  console.log(oneTodo);

  Auth.currentAuthenticatedUser({
    bypassCache: false,
  })

  const todo = { name: 'app', description: 'new todo' };
  const newTodo = API.graphql(
    graphqlOperation(mutations.createTodo, { input: todo })
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>This a AWS Test App</p>
      </header>
    </div>
  );
}

export default withAuthenticator(App, { includeGreetings: true });
