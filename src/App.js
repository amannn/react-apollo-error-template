import React, { Component } from 'react';
import { compose, gql, graphql } from 'react-apollo';

class App extends Component {
  onMutate = () =>
    this.props.mutate().then(res => {
      console.log(res);
    })

  render() {
    const { data: { loading, people, refetch } } = this.props;
    return (
      <main>
        <header>
          <button onClick={this.onMutate}>Some mutation</button>
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

export default compose(
  graphql(
   gql`{
     people {
       id
       name
     }
   }`
 ),
  graphql(
   gql`mutation testMutation {
     testMutation
   }`
 )
)(App);
