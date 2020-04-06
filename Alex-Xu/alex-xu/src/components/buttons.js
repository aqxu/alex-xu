import React, { Component } from 'react';
import styled from 'styled-components';
// import '../App.css';

const A = styled.a`
  padding: 0.4rem;
  margin: 0.8rem;
  border: 1.5px solid black;
  border-radius: 0.7rem;
  text-decoration: none;
  font-size: 1rem;
  color: black;

  :hover {
    color: white;
    background: black;
  }
`;

export class buttons extends Component {
  render() {
    return (
      <div>
        {/* <A>Resume</A> */}
        <A href='https://www.instagram.com/aqxu'>Instagram</A>
        <A href='https://www.twitter.com/aqxu'>Twitter</A>
        <A href='https://www.linkedin.com/in/alex-xu/'>LinkedIn</A>
      </div>
    );
  }
}

export default buttons;
