<template>
  <div :class="$style.chart">
    <mt-button @click="pushArr">添加</mt-button>
    <mt-button @click="scrollContent">滚动</mt-button>
    <div :class="$style['mint-button-text']">123</div>
    <div :class="['the-main', $style['the-module']]">the main</div>
    <div :class="$style.box">echarts</div>
    <!-- <div class="box">echarts</div> -->
    <div :class="$style['scroll-wrapper']" ref="scroll">
    <!-- <div class="scroll-wrapper" ref="scroll"> -->
      <!-- <div class="scroll-item" v-for="(item, index) in arr" :key="index">公告{{index}}</div> -->
      <div :class="$style['scroll-item']" v-for="(item, index) in arr" :key="index">公告{{index}}</div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import {Component} from 'vue-property-decorator'
import { clearTimeout } from 'timers';
@Component({
  name: 'EchartsDemo'
})
export default class EchartsDemo extends Vue{
  public arr: string[] = ['11', '2', '3', '4', '5','7','11', '2', '3', '4', '5','7','11', '2', '3', '4', '5','7','11', '2', '3', '4', '5','7','11', '2', '3', '4', '5','7','11', '2', '3', '4', '5','7','11', '2', '3', '4', '5','7','11', '2', '3', '4', '5','7'];

  pushArr() {
    this.arr.push(Math.ceil(Math.random() * 10).toString());
    this.scrollContent();
  }

  scrollContent() {
    const scrollEle =  this.$refs['scroll'];
    if(scrollEle) {
      const scrollHeight = scrollEle.scrollHeight;
      const eleHeight = scrollEle.offsetHeight;
      const scrollTop = scrollHeight- eleHeight;
      const nowScroll = scrollEle.scrollTop;
      let needScorll= scrollTop - nowScroll;
      const frequency = needScorll / 100;
      let interval = setInterval(()=>{
        if (needScorll > 0) {
          scrollEle.scrollTop += frequency;
          needScorll = scrollTop - scrollEle.scrollTop;
          console.log(needScorll)
        } else {
          clearInterval(interval);
        }
      }, 1);
    }
    // if(scrollEle.style.opacity === '0') {
    //   scrollEle.style.opacity = '1';
    // } else {
    //   scrollEle.style.opacity = '0';
    // }
  }
}
</script>
<style lang="scss" module>
.chart{
  font-size:20px;
  .mint-button-text{
    color:#ff6200;
  }
}
.the-module{
  color:#ff6200;
}
.box{cursor: pointer;}
.box:hover + .scroll-wrapper {
  transform: translateX(200px);
}
.scroll-wrapper{
  width: 200px;
  height: 128px;
  overflow-x: hidden;
  overflow-y: scroll;
  background: #cccccc;
  color: #ff6200;
  transform: translateX(0);
  font-size: 16px;
  transition: all .5s ease;
  .scroll-item{
    height: 32px;
    line-height: 32px;
  }
}
.scroll-wrapper::-webkit-scrollbar{width: 0;}
</style>
<style>
.mint-button-text{
    color:#ff6200;
  }
</style>



