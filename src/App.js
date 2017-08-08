import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';

class App extends Component {
  render() {
    const { data: { loading, people, refetch } } = this.props;
    return (
      <main>
        <header>
          <button onClick={() => refetch()}>Reload</button>
        </header>
        {loading ? (
          <p>Loading…</p>
        ) : (
          <ul>
            {people.map(person => (
              <li key={person.id}>
                {person.name}
              </li>
            ))}
          </ul>
        )}
      </main>
    );
  }
}

export default graphql(
  gql`{
    people {
      id
      name
    }
  }`,
)(App)
