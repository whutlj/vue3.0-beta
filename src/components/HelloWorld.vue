<template>
  <div class="hello">
    hello
    <div class="hello-cmp">
      {{computedProp}}
    </div>
    <div>
      {{dataProp}}
      {{undefineProp}}
    </div>
  </div>
</template>

<script lang="ts">
import { mixins } from 'vue-class-component';
import { Component, Prop, Vue } from 'vue-property-decorator';
import MixinDemo from '@/mixins';
import MixinDemo2 from '@/mixins/secondMixin';
import {NoCache} from '@/assets/js/decorators';
import {Route} from 'vue-router/types'
@Component
export default class HelloWorld extends mixins(MixinDemo, MixinDemo2) {
  @Prop() private msg!: string;

  instanceProp:string = 'instance';

  undefineProp: string | null = null;
  data() {
    return {
      dataProp: 'data'
    }
  }

  created() {
    console.log('instance created');
    // this.undefineProp = 'defined';
  }

  beforeRouteEnter(to: Route, from: Route, next: () => void) {
    console.log('beforeRouteEnter')
    next();
  }

  instanceMethod() {
    console.log('instance method');
  }
  @NoCache
  get computedProp():string {
    let result: string = 'no instance';
    if (this.instanceProp === 'instance') {
      result = 'instance';
    }
    this.instanceMethod();
    return result;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../assets/css/base.scss';
.hello {
  font-size: 20px;
  font-weight: bold;
  color: $mainColor;
  &-cmp {
    color: #34dd31;
  }
}
</style>
