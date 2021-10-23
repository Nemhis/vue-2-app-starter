import { VueConstructor } from 'vue';

declare module 'vue/types/vue' {
  interface Vue {
    getBoolAttrValue: (value: string | undefined | boolean) => boolean;
  }
}

export default {
  install(Vue: VueConstructor) {
    Vue.prototype.getBoolAttrValue = (value: string | undefined | boolean): boolean => {
      if (value === '') {
        return true;
      } else if (value === undefined) {
        return false;
      } else {
        return Boolean(value);
      }
    };
  }
};
