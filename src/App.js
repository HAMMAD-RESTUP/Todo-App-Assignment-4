
import { useState } from 'react';
import './App.css';
import cross from './icons/remove (3).png'

function App() {
  const [text,setText] = useState("")
  const [list, setList] = useState([]);
 


  let add = () => {
    if (!text){
      
    }else{

      list.push(text);
      setList([...list]);
    }
  };

  let Delete = () => {
    setList([])
  }



  return (
    <div className='container'>
      <h2>Todo App</h2>
      <div className='search-box'>
        <input onChange={(e) => {
          setText(e.target.value)
       
        }}
        placeholder='Do you Want to Add SomeThing?' className='search' type='search' />
        <button className='btn' onClick={add}>ADD</button>
      </div>
      <div className='add' >
  
      </div>

      <div className='show'>
       
        
                {list.map((x, i) => (
                  <>


        <div className='del' >
                <p id='para' key={i}>{x}</p>
          <button className='btn-end' onClick={Delete}><img  src={cross}/></button>
      
        </div>
        </>
              ))};
       


      </div>

    </div>



  );
}

export default App;
