import Vue from 'vue';
import { required, } from 'vee-validate/dist/rules';
import { ValidationObserver, ValidationProvider, localize, extend } from 'vee-validate';
import ru from 'vee-validate/dist/locale/ru.json';

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
localize('ru', ru);

extend('required', required);
