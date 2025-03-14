<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import Filter from '@/components/Filter.vue'
import TableTransaction from '@/components/TableTransaction.vue'
import Pagination from '@/components/Pagination.vue'
</script>

<template>
  <Navbar />
  <div class="container">
    <Filter />
    <TableTransaction />
    <Pagination />
  </div>
</template>
