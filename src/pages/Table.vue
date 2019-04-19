<template>
  <q-page class="docs-table layout-padding">
     <q-table
      title="Table Title"
      row-key="name"
      :data="tableData"
      :columns="columns"
      ></q-table>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'Form',
  data () {
    return {
      columns: [
        {
          name: 'desc',
          required: true,
          label: 'NO.',
          align: 'left',
          field: 'name',
          sortable: true
        },
        { name: 'calories', label: '节点标识', field: 'calories', sortable: true },
        { name: 'fat', label: '节点类型', field: 'fat', sortable: true },
        { name: 'carbs', label: '节点标示', field: 'carbs' },
        { name: 'protein', label: '启用标示', field: 'protein' },
        { name: 'sodium', label: 'Edit', field: 'sodium' },
        { name: 'calcium', label: 'Calcium (%)', field: 'calcium', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
        { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
      ],
      tableData: [
        {
          name: '01',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: '14%',
          iron: '1%'
        },
        {
          name: '02',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: '14%',
          iron: '1%'
        }
      ]
    }
  },
  methods: {

  }

}
</script>
