let userName;

const signup = () => {
  event.preventDefault();
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  userName = name;

  window.localStorage.setItem('auth', JSON.stringify({ name, email, password }));
  window.location.href = '/signin.html';
}

const signin = () => {
  event.preventDefault();
  const data = JSON.parse(window.localStorage.getItem('auth'));
  userName = data.name;

  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  data.logged = true;

  window.localStorage.setItem('auth', JSON.stringify(data));

  if(email === data.email && password === data.password) {
    window.location.href = '/index.html';
  } else {
    alert("Senha/E-mail incorretos!");
  }
}

const verifyLogin = () => {
  const { logged, name } = JSON.parse(window.localStorage.getItem('auth'));
  userName = name;

  if(!logged) {
    window.location.href = '/signin.html';
  }
}

const logout = () => {
  event.preventDefault();
  const data = JSON.parse(window.localStorage.getItem('auth'));
  data.logged = false;
  window.localStorage.setItem('auth', JSON.stringify(data));
  window.location.href = '/signin.html';
}