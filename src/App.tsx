
import React from 'react';

import './App.css';
import BasicContainer from './modules/views/basic/BasicContainer';
import resumeSample from './static/sample';


function App() {
  return (

    <div className="App h-full">

      <BasicContainer resume={resumeSample} />
    
    </div>
  );
}



// export default App;
export default App;