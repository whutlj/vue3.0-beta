<template>
  <div id="app" :class="$style.gbc">
    <router-view/>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';

import Component from 'vue-class-component';
@Component
export default class App extends Vue {
}
</script>
<style lang="scss" module>
.gbc{
  background: #cccccc;
}
</style>


