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
    <table class="table">
      <thead>
        <tr>
          <th width="10%">ID</th>
          <th width="15%">Дата</th>
          <th width="40%">Описание</th>
          <th width="15%">Тип</th>
          <th width="15%">Сумма</th>
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
