<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <router-link to="/home">home</router-link>
  <router-link to="/vuex">vuex</router-link>
  <router-view></router-view>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <div>
    <el-button @click="add">count is {{ count }}</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import HelloWorld from './components/HelloWorld.vue';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    const store = useStore();
    console.log(store.state.count);

    return {
      count: computed(() => store.state.count),
      double: computed(() => store.getters.double),
      add: () => store.commit('add')
    };
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
