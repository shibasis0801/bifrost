// import 'core-js/stable';
// import 'regenerator-runtime/runtime';

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import _batcave from "batcave";
const batcave = _batcave.shared.me.user.shared

function App() {
console.log(_batcave)
    batcave.database.helloSQL()
    return (
        <div>
            {batcave.helloWorld("React from Kotlin")}
            <br />
            <br />
            {new batcave.Greeting().greeting()}
            <br />
            <br />
            {(new batcave.Test("Shibasis")).name}
        </div>
    )
}

ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>,
  document.getElementById("root")
); 

// Note: Before npm run build the statement module.hot.accept(); could / should to be disabled / comment out !!!
// In Webpck HotModuleReplacementPlugin() is used to set hot to true. 
// This way the browser dont need to reload the entire page when changing  file !
// Note: Needed here - in contrast to Vue.js  !!
//  if (module.hot) {
//     module.hot.accept();
//  }

