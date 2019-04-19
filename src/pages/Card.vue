<template>
  <q-page class="docs-table layout-padding">
    <q-card inline style="width: 500px">
      <q-card-media>
        <img src="~assets/img.jpeg">
      </q-card-media>
      <q-card-title>
        Cafe Basilico
        <!-- <q-rating slot="subtitle" v-model="stars" :max="5" /> -->
        <div slot="right" class="row items-center">
          <q-icon name="place" /> 250 ft
        </div>
      </q-card-title>
      <q-card-main>
        <p>$・Italian, Cafe</p>
        <p class="text-faded">Small plates, salads & sandwiches in an intimate setting.</p>
      </q-card-main>
      <q-card-separator />
      <q-card-actions>
        <q-btn flat round dense icon="event" />
        <q-btn flat label="5:30PM" />
        <q-btn flat label="7:30PM" />
        <q-btn flat label="9:00PM" />
        <q-btn flat color="primary" label="Reserve" to="/CardDetails"/>
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex'
}
</script>
