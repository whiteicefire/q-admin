<template>
  <q-page class="flex flex-center">
    <img alt="Quasar logo" src="~assets/quasar-logo-full.svg">
    <q-toggle v-model="drawerState" />
  </q-page>
</template>

<style>
</style>

<script>
import { date, colors } from 'quasar'

export default {
  name: 'PageIndex',
  data () {
    return {
    }
  },
  computed: {
    drawerState: {
      get () {
        return this.$store.state.showcase.drawerState
      },
      set (val) {
        this.$store.commit('showcase/updateDrawerState', val)
      }
    }
  },
  mounted () {
    this.time()
    // this.color()
  },
  methods: {
    time () {
      let timeStamp = Date.now()
      let formattedString = date.formatDate(timeStamp, 'YYYY-MM-DDTHH:mm:ss.SSSZ')
      console.log(formattedString)
    },
    color () {
      const { setBrand } = colors
      setBrand('primary', '#f33')
    }
  }
}
</script>
