<template>
  <div class="boxes">
    <h4>A组件</h4>
    <p>{{a}}</p>
    <input type="button" value="把A数据给C" @click="send" />
    <input type="button" value="让我康康OBJ里藏的是什么" @click="showOBJ">
  </div>
</template>
<script>
import bus from "../../assets/js/eventBus";
export default {
  data() {
    return {
      a: "我是A里面的数据"
    };
  },
  methods: {
    send() {
      //A发送数据
        bus.$emit("a-msg", this.a);
    },
    showOBJ(){
       let obj = {
        show: false,
        type: "outer",
        component: "bus2",
        styleobj: {
          className: "boxes",
          top: "8vh"
        }
      };
      bus.$emit("showInfo", obj);
      console.log('OBJ:',obj)
    }
  }
};
</script>


<style scoped>
.boxes {
  border: 1px solid black;
  margin-bottom: 10px;
  width: 300px;
}
</style>
               