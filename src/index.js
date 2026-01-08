import React from 'react';
import ReactDOM from 'react-dom/client';
import './LogIn.js'

const root = ReactDOM.createRoot(document.getElementById('root'))
const btn = document.getElementById('register')

const data = () => {
  const name = document.getElementById('name').value 
  const password = document.getElementById('password').value
  let data = [name, password]
}

btn.addEventListener('click', data)