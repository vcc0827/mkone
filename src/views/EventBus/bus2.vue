<template>
  <div style="border: 1px dotted green; margin-bottom: 10px；width: 300px;">
    <h4>B组件,等接收数据</h4>
    <p>{{a}}</p>
  </div>
</template>
<script>
import bus from '../../assets/js/eventBus'
export default {
  data() {
    return {
      a: "",
    };
  },
  mounted() {
    
    var that = this;
    bus.$on("a-msg", function(a) {
      that.a = a;
    });
  }
};
</script>           
              
              