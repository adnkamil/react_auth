import React from "react";
import styled from "styled-components";
import './nav.css'

const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-end;
  padding: 8px;
  box-shadow: 3px 3px 11px 3px rgb(0 0 0 / 32%);
  margin:0;

  li {
    padding: 10px;
  }

  div {
    background-color: red;
    padding: 10px;
    border-radius: 10px;
    margin: 0 20px;
  }
`;

export default function Nav() {
  return (
    <nav className="container">
      <Ul>
        <li>Home</li>
        <li>About</li>
        <div>Login</div>
      </Ul>
    </nav>
  );
}
