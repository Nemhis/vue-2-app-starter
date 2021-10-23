import Vue, { VueConstructor } from 'vue';
import isMobile from 'is-mobile';

declare module 'vue/types/vue' {
  interface Vue {
    $isMobile: boolean;
  }
}

Vue.use({
  install(vue: VueConstructor) {
    vue.prototype.$isMobile = isMobile();
  }
});
