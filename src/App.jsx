import * as React from "react"
function App(){
  const title ="React";
  return(
    <div>
      <h1>hello {title}</h1>
      <label htmlFor="search"> Search :</label>
      <input id="search"type="text" />
    </div>
  );
}
export default App;
