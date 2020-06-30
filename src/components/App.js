import React from "react";
import Header from "./Header";
import ContentContainer from "./ContentContainer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div class="container">
      <React.Fragment>
        <Header />
        <ContentContainer />
      </React.Fragment>
    </div>
  );
}

export default App;