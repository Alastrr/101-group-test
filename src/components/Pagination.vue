<script setup lang="ts">
import { useStore } from '@/stores/transactionStore'
import { storeToRefs } from 'pinia'

const store = useStore()
const { items, page } = storeToRefs(store)
</script>

<template>
  <div class="block-pagination">
    <span v-if="items?.items">
      <button
        @click="page = items?.prev"
        :class="!items?.prev ? 'prev-page disabled' : 'prev-page'"
        :disabled="!items?.prev"
      >
        Назад
      </button>

      <span> {{ page }}/{{ items?.last }} </span>

      <button
        @click="page = items.next"
        :class="!items.next ? 'next-page disabled' : 'next-page'"
        :disabled="!items.next"
      >
        Вперед
      </button>
    </span>
    <span>Всего: {{ items?.items }}</span>
  </div>
</template>
