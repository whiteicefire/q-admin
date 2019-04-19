<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="primary"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>
        <q-toolbar-title>
          Quasar-admin
          <div slot="subtitle">hello word</div>
        </q-toolbar-title>
      </q-toolbar>
      <q-tabs>
        <q-route-tab v-for="(item , index) in tabsState" :key="index"
          icon=""
          :label="item.lable"
          :to="item.path"
          exact
          slot="title"
        />
      </q-tabs>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-list-header>Q-admin</q-list-header>
        <q-item :to="item.path" v-for="(item , index) in menuState" :key="index" @click.native="menurouter(item)">
          <q-item-side :icon="item.icon" />
          <q-item-main :label="item.lable" :sublabel="item.sublabel" />
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
    }
  },
  computed: {
    menuState:{
      get () {
        return this.$store.state.menurouter.menus
      }
    },
    tabsState:{
      get () {
        return this.$store.state.tabrouter.tabs
      }
    }
  },
  methods: {
    menurouter (val) {
      this.$store.commit('tabrouter/updateTabsState', val)
    }
  }
}
</script>

<style>
</style>
