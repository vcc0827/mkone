<template>
  <el-container class="elcontain">
    <el-header class="elheader">
      <div>
        <tHead></tHead>
      </div>
    </el-header>
    <el-main class="elmain">
      <div>
        <el-row>
          <bus1></bus1>
          <bus2></bus2>
        </el-row>
      </div>
      <div>
        <el-row>
          <pop></pop>
        </el-row>
      </div>
    </el-main>
  </el-container>
</template>


<script>
import tHead from "../views/tHead";
import bus1 from "../views/EventBus/bus1";
import bus2 from "../views/EventBus/bus2";
import pop from "../views/pop/popUp";

export default {
  components: {
    tHead,
    bus1,
    bus2,
    pop
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>

<style scoped>
.elcontain {
  width: 1024px;
  height: 768px;
  background-color: #eee;
}
.elheader /deep/ {
  width: 100%;
  height: 10%;
  margin: 0 0;
  padding: 0 0;
}
.elmain {
  width: 100%;
  height: 90%;
}
</style>
