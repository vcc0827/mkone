<template>
  <div>
    <!-- unfinished -->
    <input type="button" value="click to pop-up" @click="popIt" />
  </div>
</template>

<script>
import bus from "../../assets/js/eventBus"
export default {
  data() {
    return {};
  },
  methods:{
      popIt(){
        let obj = {
          show:true,
          type:"outer",
          component:'popUpInfo',
          sytleobj:{
            className:"popWindow",
            top:"10vh"
          },
          
        }
        bus.$emit("showInfo",obj)
      }
  }
};
</script>