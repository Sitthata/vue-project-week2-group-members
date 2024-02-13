<script setup lang="ts">
import type { Group } from "@/data.t";
import data from "@/groups.json";
import { computed, ref, watch, watchEffect } from "vue";
import GroupDisplay from "./GroupDisplay.vue";
import AddNewModal from "./AddNewModal.vue";
import PaginationButton from "./PaginationButton.vue";

let groupsData: Group[];
groupsData = data;

const groups = ref<Group[]>(groupsData);
const searchText = ref<string>("");
const sortBySection = ref<boolean>(false);

const toggleSort = () => {
  sortBySection.value = !sortBySection.value;
  groups.value = groupsData;
  if (sortBySection.value) groups.value.sort((a, b) => a.section - b.section);
};

const currentPage = ref(1);
const itemPerPage = 5;
const filteredGroups = computed(() => {
  return groups.value.filter(
    (group) =>
      group.groupName.toLowerCase().includes(searchText.value.toLowerCase()) ||
      group.section.toString().includes(searchText.value) ||
      group.members.some((member) =>
        member.studentId.toString().includes(searchText.value.toLowerCase())
      )
  );
});
const paginatedGroups = computed(() => {
  const start = (currentPage.value - 1) * itemPerPage;
  const end = start + itemPerPage;
  return filteredGroups.value.slice(start, end);
});
watch(currentPage, (oldValue, newValue) => {
  console.log("currentPage", oldValue, newValue);
});


</script>

<template>
  <div class="relative w-full">
    <div class="flex gap-2 items-center">
      <input
        type="text"
        placeholder="Type here"
        class="input input-bordered rounded-full w-full"
        v-model="searchText"
      />
      <button class="btn btn-primary" onclick="add_new.showModal()">
        Add new
      </button>
      <AddNewModal />
      <button class="btn btn-ghost" @click="toggleSort">section</button>
    </div>
  </div>
  <section class="mt-5">
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
      <GroupDisplay
        v-for="group in paginatedGroups"
        :key="group.ID"
        :group="group"
      />
    </div>
  </section>
  <PaginationButton
    :currentPage="currentPage"
    :itemPerPage="itemPerPage"
    :groupsLength="filteredGroups.length"
    @update:currentPage="currentPage = $event"
  />
</template>

<style></style>
