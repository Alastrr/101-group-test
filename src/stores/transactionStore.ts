import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import { format } from 'date-fns'
import axios from 'axios'

export const useStore = defineStore('transactionStore', () => {
  const page = ref<Number>(1)

  interface Item {
    id: number
    date: string
    stmp: number
    type: string
    amount: number
    description: string
  }

  interface Response {
    first: number
    prev: number | null
    next: number | null
    last: number
    pages: number
    items: number
    data: Item[]
  }

  const items = ref<Response>()

  interface Filter {
    typeItem: string
    startDate: string
    endDate: string
  }
  const filter = ref<Filter>({
    typeItem: '',
    startDate: '',
    endDate: '',
  })

  interface Sort {
    byDate: string
    bySum: string
  }
  const sort = ref<Sort>({
    byDate: '',
    bySum: '',
  })

  const formatStartDate = computed<string | number>(() => {
    if (filter.value.startDate) {
      const formatDate = format(filter.value.startDate, 'yyyy-MM-dd')
      return new Date(formatDate).getTime()
    }
    return ''
  })

  const formatEndDate = computed<string | number>(() => {
    if (filter.value.endDate) {
      const formatDate = format(filter.value.endDate, 'yyyy-MM-dd')
      return new Date(formatDate).getTime()
    }
    return ''
  })

  const concatSort = computed<string>(() => sort.value.byDate + ',' + sort.value.bySum)

  interface QueryParams {
    type: string
    stmp_gte: number | string
    stmp_lte: number | string
    _sort: string
    _page: number
    _per_page: number
  }

  const queryParams = computed<QueryParams>(() => {
    return {
      type: filter.value.typeItem,
      stmp_gte: formatStartDate.value,
      stmp_lte: formatEndDate.value,
      _sort: concatSort.value,
      _page: Number(page.value),
      _per_page: 10,
    }
  })

  watch(
    queryParams,
    async () => {
      try {
        const response = await axios.get<Response>('http://localhost:3000/transactions/', {
          params: queryParams.value,
        })
        items.value = response.data
      } catch (error) {
        console.error(error)
      }
    },
    { immediate: true },
  )

  watch([filter.value, sort.value], () => (page.value = 1))

  function clearFilter(): void {
    filter.value = { typeItem: '', startDate: '', endDate: '' }
    sort.value = { byDate: '', bySum: '' }
    page.value = 1
  }

  return { items, filter, sort, page, clearFilter }
})
