import Amplify, { API, graphqlOperation } from "aws-amplify";
import * as queries from "../graphql/queries";
import * as mutations from "../graphql/mutations";
import * as subscriptions from "../graphql/subscriptions";

// Simple query
const query = (async () => {
  const allTodos = await API.graphql(graphqlOperation(queries.listTodos));
  console.log(allTodos);
})();

// Query using a parameter
const queryWithParams = (async params => {
  const oneTodo = await API.graphql(graphqlOperation(queries.getTodo, params));
  console.log(oneTodo);
})({ id: "some id" });

// Mutation
const mutation = async () => {
  const todoDetails = {
    name: "Todo 1",
    description: "Learn AWS AppSync"
  };

  const newTodo = await API.graphql(
    graphqlOperation(mutations.createTodo, { input: todoDetails })
  );
  console.log(newTodo);
};

//mutation();

const subscribe = () => {
  // Subscribe to creation of Todo
  const subscription = API.graphql(
    graphqlOperation(subscriptions.onCreateTodo)
  ).subscribe({
    next: todoData => console.log(todoData)
  });

  // Stop receiving data updates from the subscription
  subscription.unsubscribe();
};
