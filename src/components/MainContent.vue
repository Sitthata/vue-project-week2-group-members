<script setup lang="ts">
import type { Group } from "@/data.t";
import data from "@/groups.json";
import { computed, ref, watch } from "vue";
import GroupDisplay from "./GroupDisplay.vue";
import AddNewModal from "./AddNewModal.vue";

let groupsData: Group[];
groupsData = data;

const groups = ref<Group[]>(groupsData);
const searchText = ref<String>("");
const sectionNumber = ref<number>(1);

const filteredGroup = computed(() => {
  return groups.value.filter((group) =>
    group.groupName
      .toLocaleLowerCase()
      .includes(searchText.value.toLocaleLowerCase())
  );
});

watch(sectionNumber, () => {
  console.log(sectionNumber.value);
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
      <details class="dropdown dropdown-end">
        <summary class="m-1 btn">1</summary>
        <ul
          class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52"
        >
          <li @click="sectionNumber = 1"><a>1</a></li>
          <li @click="sectionNumber = 2"><a>2</a></li>
        </ul>
      </details>
    </div>
  </div>
  <section class="mt-5">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
      <GroupDisplay
        v-for="group in filteredGroup"
        :key="group.ID"
        :group="group"
      />
    </div>
  </section>
</template>

<style></style>
