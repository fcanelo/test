// where we put out state, getters, actions, mutations
// We will make resquests to our backend here

import axios from 'axios';

const state = {
    baremes: []

};
const getters = {
    allBaremes: (state) => state.baremes
};

const actions = {

    async fetchBaremes({commit}) {
        const response = await axios.get('https://my-json-server.typicode.com/fcanelo/is/db');
        // Name of the mutation + the data
        console.log(response.data.baremes);
        commit('setBaremes' , response.data.baremes);
    }
    ,
   async submit(annee){
       console.log(annee);

    }
};


const mutations = {
    // add baremes to the state
    setBaremes: (state, baremes) => (state.baremes = baremes)
};

// export default {
//     state : state,
//     getters : getters,
//     actions : actions,
//     mutations : mutations
// }
export default {
    state,
    getters,
    actions,
    mutations
}
