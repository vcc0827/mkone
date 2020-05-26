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
          <div><mkone></mkone></div>
          <div>
            <mktwo></mktwo>
          </div>
        </el-row>
      </div>
      <div></div>
    </el-main>
  </el-container>
</template>


<script>
import tHead from '../views/tHead'
import mkone from "../views/mkone";
import mktwo from "../views/mktwo";
export default {
  components: {
    tHead,
    mkone,
    mktwo
  },
  data() {},
  methods: {},
  mounted() {}
};
</script>

<style>
.elcontain {
  width: 1024px;
  height: 768px;
  background-color: #eef;
}
.elheader {
  width: 100%;
  height: 10%;
}
.elmain {
  width: 100%;
  height: 90%;

}
</style>
