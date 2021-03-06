import firebase from "../plugins/firebase";

export const state = () => ({
  sliderStart: 0,
  sliderEnd: 0,
  sliderStartMonth: 0,
  sliderEndMonth: 0,
  sliderStartYear: 0,
  sliderEndYear: 0,
  sliderStartRange: 0,
  sliderEndRange: 0,
  heatData: null,
  selectedCamera: false,
  user: null,
  realtimeIn: 0,
  realtimeOut:0
});
export const mutations = {
  setUser(state, payload) {
    state.user = payload;
  },
  setSliderStart: function(state, start) {
    state.sliderStart = start;
  },
  setSliderEnd: function(state, end) {
    state.sliderEnd = end;
  },
  setSliderStartMonth: function(state, start) {
    state.sliderStartMonth = start;
  },
  setSliderEndMonth: function(state, end) {
    state.sliderEndMonth = end;
  },
  setSliderStartYear: function(state, start) {
    state.sliderStartYear = start;
  },
  setSliderEndYear: function(state, end) {
    state.sliderEndYear = end;
  },
  setSliderStartRange: function(state, start) {
    state.sliderStartRange = start;
  },
  setSliderEndRange: function(state, end) {
    state.sliderEndRange = end;
  },
  setHeatData: function(state, data) {
    state.heatData = data;
  },
  setSelectedCamera: function(state, data) {
    state.selectedCamera = data;
  },
  setRealtimeIn: function (state,data) {
    state.realtimeIn=data
  },
  setRealtimeOut: function (state,data) {
    state.realtimeOut=data
  }
};

export const getters = {
  isAuthenticated(state) {
    return !!state.user;
  },
  getSliderStart: state => {
    return state.sliderStartS;
  },
  getSliderEnd: state => {
    return state.sliderEnd;
  },
  getHeatData: state => {
    return state.heatData;
  },
  getSelectedCamera: state => {
    return state.selectedCamera;
  },
  getRealTimeIn: state => {
    return state.realtimeIn;
  },
  getRealTimeOut: state => {
    return state.realtimeOut;
  },
};
export const actions = {
  async login({ commit }, { email, password }) {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => resolve())
        .catch(err => reject(err));
    });
  },
  logout({ commit }) {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signOut()
        .then(() => {
          commit("setUser", null);
          resolve();
        });
    });
  }
};
export const strict = false;
