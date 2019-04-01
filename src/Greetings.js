import React from 'react'

//Function components, example:
const Greetings = ({firstName, lastName}) => <div>Hey you! {firstName} {lastName}!</div>;

//Class components, example:
// class Greetings extends React.Component {
//   render() {
//     return (
//       <div>Hey you! {this.props.firstName} {this.props.lastName}!</div>
//     );
//   }
// }

export default Greetings;
