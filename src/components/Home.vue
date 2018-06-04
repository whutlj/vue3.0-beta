<template>
  <div class="main">
    <mt-button @click="clickBtn({name: 'lj'})">点击</mt-button>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Person, Animal} from '@/assets/js/allClass';
import { movieApi } from '@/assets/js/fetch';
import { constants } from 'http2';
function argsFun(param: string, paramOne: string, ...stopParam:string[]): string {
  return param + paramOne + stopParam.join(' ');;
}
function rewrite(x: number):string;
function rewrite(x: string):string;
function rewrite(x:any) {
  if (typeof x === 'number') {
    return 'number';
  }else {
    return 'string';
  }
}
// 泛型的使用
function getSomeVal<T>(name:T[]): T[] {
  console.log(name.length)
  return name;
}
interface GenericIdentityFn{
  <T>(arg:T): T
}

const myIdentity: GenericIdentityFn = <T>(arg: T): T => {
  return arg;
}

interface GenericIdentityFnT<T> {
  (arg: T): T;
}

const myIdentityT: GenericIdentityFnT<number> = <T>(arg:T): T => {
  return arg;
}
// 泛型类
class IdentityClass<T, U> {
  name: T;
  age:U;
  constructor(name:T, age:U) {
    this.name = name;
    this.age = age;
  }
  toString() {
    return `${this.name}，${this.age}`;
  }
  ownProp() {
    return '123';
  }
}

let suits = ["hearts", "spades", "clubs", "diamonds"];
@Component({
  name: 'Home'
})
export default class Home extends Vue {
  public name = 'lj';

  public mounted() {
    this.pmethod();
    console.log(myIdentity('1dd1'))
  }

  public pmethod = () => {
    console.log(this.name);
  }

  /**
   * clickBtn
   */
  public clickBtn(param: {name: string, age: number}) {
    let tuple: [string, number];
    tuple = ['23', 11];
    console.log(tuple[3] = '123');
    enum Color {red = 2, blue, green}
    const enumVal: Color = Color.green;
    console.log(Color.red);
    console.log(enumVal);
    const enumKey: string = Color[4];
    console.log(enumKey);
    console.log(param.name);
    console.log(new Person('李杰', 23).greeting());
    console.log(new Animal('dog').greeting());
    console.log(this.$router.push({name:'hello'}))
    movieApi.get('/in_theaters').then(res => {
      console.log(res.data);
    })
    console.log(argsFun('one', 'two', '222', '333', '555'));

    let deck = {
      suits: ["hearts", "spades", "clubs", "diamonds"],
      cards: Array(52),
      createCardPicker: function() {
          // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
          return () => {
              let pickedCard = Math.floor(Math.random() * 52);
              let pickedSuit = Math.floor(pickedCard / 13);

              return {suit: this.suits[pickedSuit], card: pickedCard % 13};
          }
      }
    }

    const identityInstance = new IdentityClass<string, number>('lj', 20);
    console.log(identityInstance.toString());
    console.log(identityInstance.hasOwnProperty('ownProp'));
  }
}
</script>
<style lang="scss" scoped>
$mainColor: #ff6200;
.main{
  color: $mainColor;
}
</style>

