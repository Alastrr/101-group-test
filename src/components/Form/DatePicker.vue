<script setup lang="ts">
import { ref } from 'vue'
import '@vuepic/vue-datepicker/dist/main.css'

const maxDate = ref(new Date(2025, new Date().getMonth(), new Date().getDate()))

const props = defineProps<{
  placeholder: string
}>()
</script>

<template>
  <VueDatePicker
    :enable-time-picker="false"
    :placeholder="props.placeholder"
    locale="ru"
    :max-date="maxDate"
    format="dd.MM.yyyy"
  />
</template>
