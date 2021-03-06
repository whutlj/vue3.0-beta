import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class MixinFirst extends Vue {
  // mixin的生命周期钩子会在组件自身的钩子函数之后调用
  public created(): void {
    console.log('mixin1 demo created');
  }

  public instanceMethod(): void {
    console.log('mixin1 demo method');
  }
}
