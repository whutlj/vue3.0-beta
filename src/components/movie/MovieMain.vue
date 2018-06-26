<template>
  <div class="movie-main">
    <div class="movie-swipe" v-if="swipes.length > 0">
      <mt-swipe>
        <mt-swipe-item v-for="item in swipes" :key="item.id">
          <img :src="item.src">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div></div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import api from '@/assets/js/api.ts';
import { Component } from 'vue-property-decorator';
import { constants } from 'http2';
interface iSwipe {
  id: string,
  src: string
}
@Component({
  name: 'MovieMain'
})
export default class MovieMain extends Vue{
  public swipes:(iSwipe | undefined)[] = [];
  created() {
    this.getIntheaters();
  }
  /**
   * 获取正在上映电影
   */
  getIntheaters() {
    api.movie.inTheaters().then(res => {
      if (res && res.count) {
        let subjects: any[] = res.subjects;
        subjects = subjects.map((subject, index) => {
            let item:iSwipe = {id: '', src: ''};
            item.id = subject.id;
            item.src = subject.images.small;
            return item;
        });
        this.swipes = subjects.slice(0, 5);
      }
    });
  }
}
</script>
<style lang="scss" scoped>
.movie-main{
  .movie-swipe{
    height: 4rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>


