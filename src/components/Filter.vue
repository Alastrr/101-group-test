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
  { title: 'Новые', value: '-date' },
  { title: 'Старые', value: 'date' }
]

const sortBySum = <Select[]>[
  { title: 'Сортировка по сумме', value: '' },
  { title: 'Больше', value: '-amount' },
  { title: 'Меньше', value: 'amount' }
]
</script>

<template>
	<div class="block-filter-panel">
		<div class="grid-elem-2">
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
	</div>
</template>
