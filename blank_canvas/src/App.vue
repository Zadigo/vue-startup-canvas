<template>
  <div id="app">
      <nav-item></nav-item>
        <main>
        <!-- <div class="container"> -->
        <router-view></router-view>
        <!-- </div> -->
      </main>
      <footer-item></footer-item>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
