<template>
  <div>
    <Hero></Hero>
    <Benefits></Benefits>
    <Contact></Contact>
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/hero/Hero.vue'
import Benefits from '@/components/hero/Benefits.vue'
import Contact from '@/components/hero/Contact.vue'

export default {
  name: 'home',
  components: {
    Hero,
    Benefits,
    Contact
  }
}
</script>
