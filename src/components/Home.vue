<template>
  <div>
    home
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

  public mounted () {
    this.pmethod();
  }

  public pmethod = () => {
    console.log(this.name);
    console.log('1111');
  }
}
</script>
