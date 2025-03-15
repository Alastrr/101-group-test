<script setup lang="ts">
import { useStore } from '@/stores/transactionStore'
import DatePicker from './Form/DatePicker.vue'

const store = useStore()

interface Select {
  title: string
  value: string
}

const typeTransaction = <Select[]>[
  { title: 'Тип транзакции', value: '' },
  { title: 'Доход', value: 'income' },
  { title: 'Расход', value: 'expense' }
]

const sortByDate = <Select[]>[
  { title: 'Дата транзакции', value: '' },
  { title: 'Новые', value: 'asc' },
  { title: 'Старые', value: 'desc' }
]

const sortBySum = <Select[]>[
  { title: 'Сортировка по сумме', value: '' },
  { title: 'Больше', value: 'asc' },
  { title: 'Меньше', value: 'desc' }
]
</script>

<template>
	<div class="block-filter-panel">
      <div class="block-filtered">

        <select v-model="store.filter.typeItem">
          <option 
            v-for="item in typeTransaction" 
            :value="item.value"
            >{{ item.title }}
          </option>
        </select>

        <DatePicker 
          v-model="store.filter.startDate" 
          placeholder="Период от" 
        />

        <DatePicker 
          v-model="store.filter.endDate" 
          placeholder="Период до" 
        />
       
        <select v-model="store.sort.byDate">
          <option 
            v-for="item in sortByDate" 
            :value="item.value"
            >{{ item.title }}
          </option>
        </select>

        <select v-model="store.sort.bySum">
          <option 
            v-for="item in sortBySum" 
            :value="item.value"
            >{{ item.title }}
          </option>
        </select>

        <button @click="store.clearFilter">
          &#10006
        </button>
      </div>
	</div>
</template>

<style>
.block-filter-panel {
  border: 1px solid #f3f3f3;
  border-radius: 0.6rem;
  margin-bottom: 1rem;
  padding: 0.5rem;
}

.block-filtered select {
  margin: 0.2rem;
  background-color: #eee;
  border: 1px solid #eee;
  padding: 0.3rem;
  border-radius: 0.5rem;
  font-size: 0.9rem;
}

.block-filtered input {
  margin: 0.2rem;
  background-color: #eee;
  border: 1px solid #eee;
  padding: 0.3rem;
  border-radius: 0.5rem;
  font-size: 0.9rem;
}

select:focus {
  outline: none;
  box-shadow: none;
}
</style>
