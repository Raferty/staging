<template>
    <nav>
      <!-- навигация -->
      <ul>
        <li><a href="#">Main</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Articles</a></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navigation'
  }
  </script>
  
  <style scoped>
  nav {
    background-color: #333;
    padding: 20px;
    text-align: center;
  }
  
  nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
  }
  
  nav li {
    margin-right: 20px;
  }
  
  nav a {
    color: #fff;
    text-decoration: none;
  }
  </style>