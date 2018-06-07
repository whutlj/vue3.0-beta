<template>
  <div :class="$style.main">
    <mt-button @click="clickBtn({name: 'lj'})">点击</mt-button>
    <mt-button @click="tsBtn">TS</mt-button>
    <mt-popup v-model="visible"
      :class="$style.popup"
     position="bottom">
      这里是底部弹框
     </mt-popup>
     <div :class="$style['test-rem']"></div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Person, Animal} from '@/assets/js/allClass';
import { movieApi } from '@/assets/js/fetch';
import { constants } from 'http2';
import { relative } from 'path';
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
  pprop:T;
  constructor(name:T, age:U) {
    this.name = name;
    this.age = age;
    this.pprop = name;
  }
  toString() {
    return `${this.name}，${this.age}`;
  }
  ownProp() {
    return '123';
  }
}

interface Bird {
  fly():any;
  layEggs():any;
}

interface Fish{
  swim():any;
  layEggs():any;
}
function getPet():Fish | Bird {
  let birds: Bird = {
    fly: () => {
      return 'fly';
    },
    layEggs: () => {
      return 'layEggs';
    }
  }
  return birds;
}

interface Ipadder {
  getPadding(): string;
}

interface Person1{
  name: string;
}
// 类型别名,使用交叉类型
type PersonList<T> = T & {next: PersonList<T>};

function f() {
    console.log("f(): evaluated");
    return function (target:any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("f(): called");
    }
}
// function ff(target, propertyKey: string, descriptor: PropertyDescriptor) {
//         console.log("ff(): called");
//     }
function g() {
    console.log("g(): evaluated");
    return function (target:any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("g(): called");
        target.getName = () => {
          return 'name111';
        }
    }
}
// function gg(target, propertyKey: string, descriptor: PropertyDescriptor) {
//         console.log("gg(): called");
//     }
class C {
    @f()
    @g()
    method() {}
}


let suits = ["hearts", "spades", "clubs", "diamonds"];
@Component({
  name: 'Home'
})
export default class Home extends Vue {
  public name = 'lj';
  public visible = false;
  public pprop = 'p';
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
    movieApi.get('/in_theaters', {params: {city: '成都'}}).then(res => {
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
    let Persons:PersonList<Person1>; // 类型
    let key: keyof IdentityClass<number, number>;
  }
  /**
   * tsBtn
   */
  public tsBtn() {
    let pet = getPet();
    if ((<Bird>pet).fly){
      let result = (<Bird>pet).fly();
      console.log(result);
    }
    // this.visible = true;
    let sym1 = Symbol('key');
    let sym2 = Symbol('key');
    console.log(sym1)
    console.log(sym2)
    let cInstance = new C();
    // console.log(cInstance.getName());
  }
}
</script>
<style lang="scss" module>
$mainColor: #ff6200;
.main{
  display: flex;
  align-items: center;
  color: $mainColor;
  .popup{
    width: 100%;
  }
  .test-rem{
    width: 1rem;
    padding: 0.1rem;
    background: #ff6200;
    height: 1rem;
  }
}
</style>

