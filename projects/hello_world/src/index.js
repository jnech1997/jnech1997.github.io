import React from 'react';
import ReactDOM from 'react-dom';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const name = 'Joseph Nechleba';
const user = {
  firstName: 'Joseph',
  lastName: 'Nechleba'
};

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}</h1>;
  }
  else {
    return <h1>Hello, Stranger </h1>;
  }
}

/* element is a JSX object */
const element = <h1>Hello, {formatName(user)}</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);

/*

You may use quotes to specify string literals as attributes:

const element = <div tabIndex="0"></div>;

You may also use curly braces to embed a JavaScript expression in an attribute:

const element = <img src={user.avatarUrl}></img>;

It is safe to embed user input in JSX:

const title = response.potentiallyMaliciousInput;
// This is safe:
const element = <h1>{title}</h1>;

*/

/*

JSX tags may contain children:

const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);

*/