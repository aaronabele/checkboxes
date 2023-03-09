Vue.createApp({
  data() {
    return {
      selectedCheckboxes: [],
    };
  },
  watch: {
    selectedCheckboxes(newValue) {
      if (newValue.length === 3) {
        this.selectedCheckboxes.splice(-2, 1);
      }
    },
  },
}).mount("#app");
