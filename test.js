import d from "./NTechDOM.js";
import {t, n} from "./test2.js";

const div = d.createElement(
  "div",
  "Hello World",
  {style: "color: red"});
  
  const test = d.createElement("div", " Test ", {style: "color: blue", onclick: "test()"});
  const t1 = {...test};
  const t2 = {...test};
  div.append(t1, t2);
  console.log(test);
d.render("root", div);


//setTimeout(function() {div.removeElement(test)}, 100);
window.test =  () => {
  d.render("root", t);
  //t.setChildren(n);
}