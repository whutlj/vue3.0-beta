<template>
  <div>
    <mt-header fixed :class="$style['db-header']" title="武理小杰">
      <div slot="left">
        <img :src="headerImg" alt="header logo">
      </div>
    </mt-header>
    <mt-navbar v-model="selectTab" :class="$style.navbar">
      <mt-tab-item id="movie" :class="$style['navbar-item']">电影</mt-tab-item>
      <mt-tab-item id="book" :class="$style['navbar-item']">图书</mt-tab-item>
      <mt-tab-item id="music" :class="$style['navbar-item']">音乐</mt-tab-item>
      <mt-tab-item id="event" :class="$style['navbar-item']">同城</mt-tab-item>
      <mt-tab-item id="a" :class="$style['navbar-item']">活动</mt-tab-item>
    </mt-navbar>
    <div>
      <div class="lazy-item" v-for="item in list" :key="item.id">
        <img v-lazy="item.src">
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import '@/assets/js/demo.js'
import { Component } from 'vue-property-decorator';
const headerImg = require('@/assets/img/whutlj2.png');
@Component
export default class DbHome extends Vue{
  public selectTab:string = 'movie'
  public headerImg:any = headerImg
  public count:number = 0
  add(){
    this.count ++;
  }

  created() {
    console.log(this)
  }
}
</script>
<style lang="scss" module>
@import '../assets/css/base.scss';
.db-header{
  color: #fff;
  padding: 0; 
  height: 0.8rem;
  img{
    width: 0.8rem;
    height: 0.8rem;
  }
}
.navbar{
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  background: $mainColor;
  margin-top: 0.8rem;
  &-item{
    flex: 1 0 auto;
    width: 2rem;
    color: $fontColor;
  }
}
</style>




