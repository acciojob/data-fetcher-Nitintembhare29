
import React,{useState, useEffect} from "react";
import axios from "axios";
import './../styles/App.css';

const App = () => {
  const [data, setdata] = useState([]);

  function fetchData() {
    fetch("https://dummyjson.com/products")
    .then((res)=>(res.json()))
    .then((res)=>{setdata(res)})
    .catch((err)=>{console.log(err); setdata(`An error occurred: ${err}`)})
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (!data) {
    return <p>Loading product data...</p>;
  }

  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Data Fetched from API</h1>
        <pre className="data">{JSON.stringify(data,null,2)}</pre>
    </div>
  )
}

export default App
