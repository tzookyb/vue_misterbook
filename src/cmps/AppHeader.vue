<template>
  <header class="main-container">
    <div class="flex space-between">
      <div class="flex align-center">
        <img class="logo" src="../assets/img/logo.jpg" />
        <h1>MisterBook</h1>
      </div>

      <nav class="flex align-center">
        <router-link to="/">Home</router-link> |
        <router-link to="/book">Bookshop</router-link> |
        <router-link to="/about">About us</router-link> |
      </nav>
    </div>
  </header>
</template>