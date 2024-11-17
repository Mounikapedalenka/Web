import React from 'react';
class Nav extends React.Component {
  constructor() {
    super();
   this.state = {Model: "red"};
  }
  render() {
    return( <h2>I am a {this.state.Model} Car!</h2>
    );
  }
}
export default Nav;
