<script setup lang="ts">
import { ref, watch } from "vue";

type Members = {
  isLead: boolean;
  id: string;
  name: string;
};

const section = ref<number>();
const projectName = ref<string>("");
const movie = ref<string>("");
const languages = ref<string[]>([]);
const memberCount = ref<number>(0);
const members = ref<Members[]>([]);

const handleEnter = () => {
  alert(`Submitted - ${projectName.value}`);
};

watch(memberCount, () => {
  members.value = [];
  for (let i = 0; i < memberCount.value; i++) {
    members.value.push({ isLead: false, id: "", name: "" });
  }
});
</script>
<template>
  <dialog id="add_new" class="modal">
    <div class="modal-box">
      <form @submit.prevent class="px-5 gap-4 form-control justify-center">
        <div class="form-control">
          <div class="form-control">
            <div class="label">
              <span class="label-text">Section</span>
            </div>
            <select
              class="select select-bordered max-w-sm"
              v-model.number="section"
            >
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>

          <div class="label">
            <span class="lable-text">Your Project Name</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full max-w-sm"
            v-model="projectName"
            @keyup.enter="handleEnter"
          />
        </div>

        <div class="form-control">
          <div class="label">
            <span class="label-text">Pick the best fantasy franchise</span>
          </div>
          <select class="select select-bordered max-w-sm" v-model="movie">
            <option disabled selected>Pick one</option>
            <option value="1">Star Wars</option>
            <option value="2">Harry Potter</option>
            <option value="3">Lord of the Rings</option>
            <option value="4">Planet of the Apes</option>
            <option value="5">Star Trek</option>
          </select>
        </div>

        <div class="form-control">
          <h2>What is your favorite Language?</h2>
          <label class="label cursor-pointer justify-start gap-3">
            <input
              type="checkbox"
              class="checkbox"
              value="Java"
              v-model="languages"
            />
            <span class="text-lg">Java</span>
          </label>
          <label class="label cursor-pointer justify-start gap-3">
            <input
              type="checkbox"
              class="checkbox"
              value="Python"
              v-model="languages"
            />
            <span class="text-lg">Python</span>
          </label>
          <label class="label cursor-pointer justify-start gap-3">
            <input
              type="checkbox"
              class="checkbox"
              value="Kotlin"
              v-model="languages"
            />
            <span class="text-lg">Kotlin</span>
          </label>
        </div>
        <h1 v-for="(language, index) in languages" :key="index">
          {{ language }}
        </h1>

        <!-- Number of Members -->
        <label class="form-control w-full max-w-xs">
          <div class="label">
            <span class="label-text">Number of Members</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
            v-model.number="memberCount"
          />
        </label>
        <div v-if="memberCount >= 0">
          <div v-for="(member, i) in members" :key="i">
            <div class="flex">
              <label class="label cursor-pointer justify-start gap-3">
                <input
                  type="checkbox"
                  class="checkbox"
                  v-model="member.isLead"
                />
                <span class="text-lg">Project Lead</span>
              </label>
              <input
                type="text"
                class="input input-bordered max-w-xs"
                placeholder="Student ID"
                v-model="member.id"
              />
              <input
                type="text"
                class="input input-bordered max-w-xs"
                placeholder="Name"
                v-model="member.name"
              />
            </div>
            <div>
              <h1>{{ member.isLead }}</h1>
              <h1>{{ member.name }}</h1>
              <h1>{{ member.id }}</h1>
            </div>
          </div>
        </div>
        <button class="btn btn-outline" @click="handleEnter">Submit</button>
      </form>
      <div class="modal-action">
        <form method="dialog">
          <!-- if there is a button in form, it will close the modal -->
          <button class="btn">Close</button>
        </form>
      </div>
    </div>
  </dialog>
</template>

<style lang="scss" scoped></style>
