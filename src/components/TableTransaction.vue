<script setup lang="ts">
import { useStore } from '@/stores/transactionStore'
import { storeToRefs } from 'pinia'

const store = useStore()
const { items } = storeToRefs(store)

const formatDate = (item: string) => item.split('-').reverse().join('.')
const formatType = (item: string) => (item === 'income' ? 'Доход' : 'Расход')
</script>

<template>
  <div>
    <table>
      <thead>
        <tr>
          <th style="width: 10%">ID</th>
          <th style="width: 15%">Дата</th>
          <th style="width: 45%">Описание</th>
          <th style="width: 15%">Тип</th>
          <th style="width: 15%">Сумма</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in items?.data" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ formatDate(item.date) }}</td>
          <td>{{ item.description }}</td>
          <td>{{ formatType(item.type) }}</td>
          <td>{{ item.amount }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<style scoped>
table {
  width: 100%;
  border: none;
  margin-bottom: 20px;
}

table thead {
  height: 50px;
}

table thead th {
  font-weight: bold;
  text-align: center;
  border: none;
  background: #eee;
  font-size: 14px;
  vertical-align: middle;
}

table thead tr th:first-child {
  border-radius: 8px 0 0 8px;
}

table thead tr th:last-child {
  border-radius: 0 8px 8px 0;
}

table tbody td {
  text-align: center;
  border: none;
  font-size: 14px;
  height: 30px;
}

table tbody tr:nth-child(even) {
  background: #f3f3f3;
}

table tbody tr td:first-child {
  border-radius: 8px 0 0 8px;
}

table tbody tr td:last-child {
  border-radius: 0 8px 8px 0;
}
</style>