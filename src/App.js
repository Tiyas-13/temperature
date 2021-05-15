import './App.css';
import {useState, useEffect} from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

export default function App() {
  
  const [items, setItems] = useState([]);
  useEffect(() => {

    const interval = setInterval(() => {
      
        fetch("https://io.adafruit.com/api/v2/sangram0810/feeds/workshop-temperature/data?limit=5&x-aio-key=aio_SOcw72x5Km85BylQngjZbSsX8bp4")
      .then(res => res.json())
      .then(
        (result) => {
          setItems(result);
          console.log(result);
        })

    }, 10000);

    return () => clearInterval(interval);
  }, []);

    return (
      
      <div style={{backgroundColor: "lightblue"}}>
    
            {items.map(item => 
             <li key={item.id}>
              <div>{item.value}</div>
             </li>
              )}
          
    
      </div>
      
  );

  
}


