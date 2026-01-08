import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'))
const btn = document.getElementById('register')

const data = () => {
  const name = document.getElementById('name').value 
  const password = document.getElementById('password').value
  let data = [name, password]

  console.log(data)
}

btn.addEventListener('click', data)