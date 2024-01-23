<script setup lang="ts">
import type { Group } from "@/data.t";
import { ref } from "vue";

const props = defineProps<{
  group: Group;
}>();

const { ID, section, groupName, members, repo } = props.group;
const activeTab = ref("infos");
</script>

<template>
  <div
    class="flex flex-col p-5 bg-base-200 w-full"
    :class="{ '!bg-base-300': ID % 2 === 0 }"
  >
    <div role="tablist" class="tabs tabs-boxed">
      <a
        role="tab"
        :class="{ 'tab-active': activeTab === 'infos' }"
        class="tab transition-all duration-150"
        @click="activeTab = 'infos'"
        >Project Info</a
      >
      <a
        role="tab"
        class="tab transition-all duration-300"
        :class="{ 'tab-active': activeTab === 'members' }"
        @click="activeTab = 'members'"
        >Members</a
      >
    </div>
    <div v-show="activeTab === 'infos'" class="flex flex-col gap-2 p-3">
      <h1 class="text-xl">Name: {{ groupName }}</h1>
      <h1>Section: {{ section }}</h1>
      <a :href="repo" class="link link-secondary">View Project</a>
    </div>
    <div v-show="activeTab === 'members'" class="flex flex-col gap-2 p-3">
      <h1 class="text-3xl">Member</h1>
      <ol v-for="(member, index) in members" :key="index">
        <li>ID:{{ member.studentId }} {{ member.studentName }}</li>
      </ol>
    </div>
  </div>
</template>
