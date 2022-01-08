import AOS from "aos";
import "aos/dist/aos.css";

const globalAOS = AOS.init({
  startEvent: "load",
  once: true
});

window.onNuxtReady(() => {
  AOS.refresh();
});

export default ({ app }) => {
  app.AOS = globalAOS;
};
