import Vue, { VueConstructor } from 'vue';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import relativeTime from 'dayjs/plugin/relativeTime';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

declare module 'vue/types/vue' {
  interface Vue {
    $date: (date?: dayjs.ConfigType, format?: dayjs.OptionType) => dayjs.Dayjs;
  }
}

dayjs.locale('ru');
dayjs.extend(relativeTime);

Vue.use({
  install(vue: VueConstructor) {
    vue.prototype.$date = dayjs;
  }
});
