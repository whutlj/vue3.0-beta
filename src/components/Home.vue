<template>
  <div>
    <button @click="clickBtn">点击</button>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
@Component({
  name: 'Home'
})
export default class Home extends Vue {
  public name = 'lj';

  public mounted() {
    this.pmethod();
  }

  public pmethod = () => {
    console.log(this.name);
    console.log('1111');
  }

  /**
   * clickBtn
   */
  public clickBtn() {
    let tuple: [string, number];
    tuple = ['23', 11];
    console.log(tuple[3] = '123');
    enum Color {red = 2, blue, green}
    const enumVal: Color = Color.green;
    console.log(Color.red);
    console.log(enumVal);
    const enumKey: string = Color[4];
    console.log(enumKey);
  }
}
</script>
