<script setup lang="ts">
import totalPages from "@/components/lib/utils";

defineProps<{
  currentPage: number;
  itemPerPage: number;
  groupsLength: number;
}>();
</script>

<template>
  <section>
    <div class="join flex justify-center mt-5">
      <button
        v-for="(n, index) in totalPages(groupsLength, itemPerPage)"
        :key="index"
        class="join-item btn"
        :class="{ 'btn-active': n === currentPage }"
        @click="$emit('update:currentPage', n)"
      >
        {{ n }}
      </button>
    </div>
  </section>
</template>
