import d from "./NTechDOM.js";

const t = d.createElement("div", "remove All");
const n = d.createElement("div", "TEST", {style: "color: red; font: 700 30px monospace;"});
t.append(n);
const getTime = async () => {
  try{
     let ti = await d.time();
     console.log(ti)
  } catch(err){
    getTime();
  }
}
t.onload = getTime;
export {t, n};