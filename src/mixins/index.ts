import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class MixinDemo extends Vue {
  // mixin的生命周期钩子会在组件自身的钩子函数之后调用
  public created(): void {
    console.log('mixin demo created');
  }

  public instanceInstance(): void {
    console.log('mixin demo instance methods');
  }
}
