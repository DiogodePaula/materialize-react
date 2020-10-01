export function login(data) {
  return {
    type: 'login',
    data,
  };
}

export function logout(data) {
  return {
    type: 'logout',
    data,
  };
}

// não usamos default por que ele é padrão e sem ele podemos exportar o que quisermos desse arquivo
