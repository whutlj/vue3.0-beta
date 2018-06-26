<template>
  <div>
    <mt-header fixed :class="$style['db-header']" title="武理小杰">
      <div slot="left">
        <img :src="headerImg" alt="header logo">
      </div>
    </mt-header>
    <mt-navbar v-model="selectTab" :class="$style.navbar">
      <mt-tab-item id="movie" :class="$style['navbar-item']" @click.native="routerChange('MovieMain')">电影</mt-tab-item>
      <mt-tab-item id="book" :class="$style['navbar-item']" @click.native="routerChange('BookMain')">图书</mt-tab-item>
      <mt-tab-item id="music" :class="$style['navbar-item']" @click.native="routerChange('MusicMain')">音乐</mt-tab-item>
      <mt-tab-item id="event" :class="$style['navbar-item']" @click.native="routerChange('CityMain')">同城</mt-tab-item>
      <mt-tab-item id="a" :class="$style['navbar-item']" @click.native="routerChange('ActivityMain')">活动</mt-tab-item>
    </mt-navbar>
    <div :class="$style['db-item']">
      <router-view></router-view>
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
  public imgList: Array<any> = [
    {id: 1, src:'http://newdev.oss-cn-hangzhou.aliyuncs.com/ade/image/knowledge/2018/05/25/d3a34ad15a694f4ab930d564b642bc64.jpg'},
    {id: 2, src:'http://newrank.oss-cn-hangzhou.aliyuncs.com/ade/image/knowledge/2017/12/04/6c873cb856944cb5a9c4d73a264542a4.jpg'},
    {id: 3, src:'http://newrank.oss-cn-hangzhou.aliyuncs.com/ade/image/knowledge/2017/12/04/2cccfbdb1eda48b28e10f4fa9b2ce3a4.jpg'},
    {id: 4, src:'http://img.xdnphb.com/ueditor/edit/upload/cover/20180413/1523584621449019039.jpg'},
    {id: 5, src:'http://img.xdnphb.com/ueditor/edit/upload/cover/20180502/1525253271699007091.jpg'},
    {id: 6, src:'http://newrank.oss-cn-hangzhou.aliyuncs.com/ade/image/knowledge/2017/12/04/48be12575ab1470f822d6de1b4ccd5f1.jpg'}
  ]

  add(){
    this.count ++;
  }

  routerChange(name:string) {
    console.log(name)
    this.$router.push({name: name});
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
.db-item{
  background: #ffffff;
}
.lazy-item{
  width: 4rem;
  img{
    width: 100%;
    height: 100%;
  }
}
</style>




