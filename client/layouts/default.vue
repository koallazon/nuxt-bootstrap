<template>
  <div>
    <header>
      <nav>
        <Nuxt-link :to="$i18n.path('')" exact>
          {{ $t('head.menu1') }}
        </Nuxt-link>
        <Nuxt-link :to="$i18n.path('about')" exact>
          {{ $t('head.menu2') }}
        </Nuxt-link>
          <NuxtLink v-if="$i18n.locale === 'ko'" :to="`/en` + $route.fullPath" class="Header__Link" active-class="none" exact>
            KOR
          </NuxtLink>
          <NuxtLink v-else :to="$route.fullPath.replace(/^\/[^\/]+/, '')" class="Header__Link" active-class="none" exact>
            ENG
          </NuxtLink>
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
