import myname from './testFile'

const name = 'Ahmed Mansour ' ; 
console.log(name) ; 
class App {
    myFun(){
        return 'any';
    }
}


const fApp = new App() ; 
console.log(fApp.myFun()) ; 
console.log(fApp) ; 


console.log(myname) ; 


// //"scripts": {
//     "serve": "live-server public ",
//     "webpack": "webpack",
//     "build": "babel src/index.js  --out-file dist/main.js --presets  env --watch "
//   },