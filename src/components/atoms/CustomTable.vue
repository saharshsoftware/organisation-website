<!-- ReusableView.vue -->

<script setup lang="ts">
defineProps(['tableHeader', 'tableData']);
</script>

<template>
  <div class="overflow-x-auto">
    <table class="table lg:table-lg md:table-md table-xs table-zebra border-[1px] border-[#d8d8d8] shadow">
      <thead>
        <tr>
          <th class="text-lg common-td" v-for="(header, index) in tableHeader" :key="index">{{ header }}</th>
        </tr>
      </thead>
      <tbody>
        <template v-if="$slots.tbodyRow">
          <!-- Use a slot for custom rendering of tbody rows -->
          <slot name="tbodyRow" v-for="(row, rowIndex) in tableData" :key="rowIndex" :row="row" />
        </template>
        <template v-else>
          <!-- Default rendering if no slot is provided -->
          <tr v-for="(row, rowIndex) in tableData" :key="rowIndex">
            <td v-for="(value, key) in row" :key="key" class="common-td">{{ value }}</td>
          </tr>
        </template>
      </tbody>
      
    </table>
  </div>
</template>

<style scoped>
/* Add your scoped styles here if needed */
</style>
