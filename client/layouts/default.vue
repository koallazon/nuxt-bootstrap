<template>
  <div>
    <header>
      <nav>
        <nuxt-link to="/">Index</nuxt-link>
        <nuxt-link to="/about">About</nuxt-link>
        <nuxt-link to="/live">Live-index</nuxt-link>
        <nuxt-link to="/live/1">Live-1</nuxt-link>
      </nav>
    </header>
    <Nuxt />
  </div>
</template>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

header {
  padding: 6px 12px;
  margin-top: 10px;
}
nav a {
  padding: 12px 24px;
  background-color: #ccc;
  border-radius: 5px;
  color: #000;
  font-size: 20px;
  font-weight: 700;
}
</style>
