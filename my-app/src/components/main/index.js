import React from 'react';
import Title from '../title';
import AddTask from '../add-task';

import './main.css';

const Main =({taskarr})=>{
    //console.dir(props);
    console.dir(taskarr);
    return(
        <div className='main_div'>
           <Title text='Список задач на сегодня'/> 
           <AddTask taskarr={taskarr}/>
           <Title text='Осталось ____ задач'/> 
        </div>
    )

}
export default Main;