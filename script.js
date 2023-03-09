/* 
const fastCheck = document.querySelector("#fast");
const cheapCheck = document.querySelector("#cheap");
const goodCheck = document.querySelector("#good");
lastCheckbox = null;

function toggle(clickedCheckbox, otherCheckbox1, otherCheckbox2) {
  if (
    clickedCheckbox.checked &&
    otherCheckbox1.checked &&
    otherCheckbox2.checked
  ) {
    lastCheckbox.checked = false;
  }
  lastCheckbox = clickedCheckbox;
}
fastCheck.addEventListener("change", function () {
  toggle(fastCheck, cheapCheck, goodCheck);
});
cheapCheck.addEventListener("change", function () {
  toggle(cheapCheck, fastCheck, goodCheck);
});
goodCheck.addEventListener("change", function () {
  toggle(goodCheck, cheapCheck, fastCheck);
});
*/

Vue.createApp({
  data() {
    return {
      checkboxes: [
        { id: 1, value: "fast", done: true },
        { id: 2, value: "cheap", done: false },
        { id: 3, value: "good", done: false },
      ],
      selectedCheckboxes: [],
    };
  },
  watch: {
    selectedCheckboxes: {
      handler(newValue, oldValue) {
        if (newValue.length === 3) {
          this.selectedCheckboxes.splice(-2, 1);
        }
        this.checkboxes.forEach((checkbox) => {
          checkbox.done = this.selectedCheckboxes.includes(checkbox.value);
        });
      },
      deep: true,
    },
  },
}).mount("#app");
