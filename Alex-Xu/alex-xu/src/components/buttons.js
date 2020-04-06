import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.a`
  padding: 0.5rem;
  margin: 0.8rem;
  border: 1.5px solid black;
  border-radius: 0.7rem;
  font-size: 1rem;

  &:hover {
    background: black;
    color: white;
  }
`;

export class buttons extends Component {
  render() {
    return (
      <div>
        <Button>Resume</Button>
        <Button>Instagram</Button>
        <Button>Twitter</Button>
        <Button>Blog</Button>
      </div>
    );
  }
}

export default buttons;
