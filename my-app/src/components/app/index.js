import React from 'react';
import Main from "../main";

import "./app.css";

const App = ()=>{
    const arrayTask=['First','Second','Third'];
    return(
        <div className='container_div'>
            <Main taskarr={arrayTask}/>
        </div>
    )

}
export default App;