<script setup lang="ts">
import type { Group } from "@/data.t";
import SearchIcon from "./icons/SearchIcon.vue";
import data from "@/groups.json";
import { computed, ref } from "vue";
import GroupDisplay from "./GroupDisplay.vue";

let groupsData: Group[];
groupsData = data;

const groups = ref<Group[]>(groupsData);
const searchText = ref<String>("");

const filteredGroup = computed(() => {
  return groups.value.filter((group) =>
    group.groupName
      .toLocaleLowerCase()
      .includes(searchText.value.toLocaleLowerCase())
  );
});
</script>

<template>
  <div class="relative w-full">
    <input
      type="text"
      placeholder="Type here"
      class="input input-bordered rounded-full w-full"
      v-model="searchText"
    />
    <SearchIcon class="absolute top-[33%] right-6" />
  </div>
  <section class="mt-5">
    <div class="grid md:grid-cols-3 gap-3">
      <GroupDisplay
        v-for="group in filteredGroup"
        :key="group.ID"
        :group="group"
      />
    </div>
  </section>
</template>

<style></style>
