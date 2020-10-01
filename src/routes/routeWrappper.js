import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

// import DefaulLayout from '../_layout/default';
// import AuthLayout from '..';

export default function RoutWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const user = useSelector((state) => state.login);
  let signed = false;

  if (user) {
    signed = true;
  }

  // rota caso user n esteja logado
  if (!signed && isPrivate) {
    return <Redirect to="/login" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/" />;
  }

  return (
    <Route
      {...rest}
      render={(props) => (
        <>
          <Component {...props} />
        </>
      )}
    />
  );
}
