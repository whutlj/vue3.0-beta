<template>
  <div id="app">
    <div :class="$style.content">
      内容
    </div>
    <div :class="$style.top">
      我是Top
      <div :class="$style.top_name">
        名字<div :class="$style.loading"></div>
      </div>
      <div class="component">
        {{initailMsg}}:{{name}}
        <div>
          计算属性{{computedName}}
          <div>
            {{vueMethod()}}
          </div>
        </div>
      </div>
    </div>
    <div>
    <router-view/>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
export default class App extends Vue {
  public initailMsg = '初始化数据';
  public name = '新榜';
  get computedName() {
    console.log('计算属性');
    return `${this.name} 前端`;
  }

  public vueMethod() {
    return '实例方法';
  }
}
</script>
<style module>
.content{color: #ff6200;}
.top {
  font-size: 18px;
  &_name {
    display: inline-block;
    color: red;
  }
}
.loading:after {
    overflow: hidden;
    display: inline-block;
    vertical-align: bottom;
    animation: ellipsis 1s infinite ease-in;
    font-size: 18px;
    content: "\2026"; /* ascii code for the ellipsis character */
}
@keyframes ellipsis {
    from {
        width: 2px;
    }
    to {
        width: 15px;
    }
}   
</style>

