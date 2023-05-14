
// const test=require("./main.js");
const add=require("./calculator/Add.js");
const subs=require("./calculator/substraction.js");
const multi=require("./calculator/multip.js");
const moduless=require("./calculator/modules.js");
const div=require("./calculator/Divid.js");
// const fare=require("./Temprature/faret-to-cels.js")
const faretToCelsius=require("./Temprature/faret-to-cels.js")
const meterToCent=require("./meterToCent.js")
const centToMeter=require("./CentTometer.js")
const mterToKil=require("./metorTo Kil.js")





// console.log(test.name);

add.add(32,44);
subs.subs(12,33);
multi.multi(87,67);
moduless.moduless(09,67);
div.div(98,41);

faretToCelsius.faretToCelsius(1);

meterToCent.meterToCent(11);
centToMeter.centToMeter(32)

mterToKil.mterToKil(1)


