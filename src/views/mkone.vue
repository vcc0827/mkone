<template>
  <div class="tou">
    <span>A点</span>
    <ul>
      <li v-for="item in ArrayA" :key="item">
        <div>{{item.name}}</div>
        <div>{{item.count}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    ArrayA() {
      return this.$store.state.ArrayA;
    }
  }
};
</script>

<style scoped>
</style>