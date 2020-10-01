import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';

import { Title } from './style';

import * as loginActions from '../../store/login/action';

export default () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const dispatch = useDispatch();

  function handleLogin() {
    if (email !== '' && senha !== '') {
      dispatch(
        loginActions.login({
          email,
          senha,
        })
      );
    } else {
      alert('Favor, digitar, os dados');
    }
  }

  function handleClean() {
    setEmail('');
    setSenha('');
  }

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
        <input
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <br />
      <label>
        Senha:
        <input
          value={senha}
          type="text"
          onChange={(e) => setSenha(e.target.value)}
        />
      </label>
      <br />
      <br />
      <Button type="button" onClick={() => handleLogin()}>
        Login
      </Button>
      <Button color="red" type="button" onClick={() => handleClean()}>
        {' '}
        Limpar{' '}
      </Button>
    </div>
  );
};
