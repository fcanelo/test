// Entry point for vuex
// where we combine all our modules
import Vuex from 'vuex';
import Vue from 'vue';

import Calculette from './modules/calculette';

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
    modules : {
        Calculette
    }
});
