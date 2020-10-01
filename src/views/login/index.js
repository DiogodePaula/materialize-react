import React from 'react';

import { Title } from './style';

export default () => {
  return (
    <div
      style={{
        width: '30%',
        margin: 'auto',
        textAlign: 'center',
        border: '3px solid black',
        borderRadius: '15px',
        padding: '20px',
      }}
    >
      <Title>
        Faça Login
        <br />
        <br />
        <p>Bem legal esse styled-components</p>
      </Title>
      <label>
        Email:
        <input type="text" />
      </label>
      <br />
      <br />
      <label>
        Senha:
        <input type="email" />
      </label>
      <br />
      <br />
      <button type="button" onClick={false}>
        Login
      </button>
    </div>
  );
};
