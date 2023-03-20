### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript? 
  promises are the best way to do this.

- What is a Promise?
  it is a part of Javascript that allows for the code to wait for a set of requests for the rest of the code to run

- What are the differences between an async function and a regular function?
  an async function has to wait for some code to follow through before the rest of the code can run.

- What is the difference between Node.js and Express.js?
  node is the default and express is a framework that makes some of the function of node easier to achieve. 

- What is the error-first callback pattern?
  errors will be the first thing passed in when an error occurs 

- What is middleware?
  middleware is some sort of function or code that runs between each request. 

- What does the `next` function do?
  it allows the code to run to the next thing in the script to run instead of stoping at the first thing that matches.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
  using await all and putting all the request into one request could be a better approach. and adding in a try and catch.