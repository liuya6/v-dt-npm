<template>
  <div id="app" @click="appClick">
    <div>
      <button @click="show = !show">show</button>
    </div>
    <!--    <div-->
    <!--      class="app"-->
    <!--      v-if="show"-->
    <!--      v-debounce.stop="{ fn: test, params: [1, 2], even: 'scroll' }"-->
    <!--    >-->
    <!--      <ul>-->
    <!--        <li v-for="item in 1000" :key="item">{{ item }}</li>-->
    <!--      </ul>-->
    <!--    </div>-->
    <button
      v-show="show"
      v-debounce.stop="{ fn: test, params: [1], use: 'before' }"
    >
      测试按钮
    </button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      message: "message",
      show: true,
    };
  },
  methods: {
    appClick() {
      console.log("appclick");
    },
    test(a) {
      console.log(a, this.message);
    },
  },
};
</script>

<style>
.app {
  height: 100px;
  overflow: auto;
}
</style>
