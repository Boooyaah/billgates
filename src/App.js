import axios from "axios";
import { useState, useEffect } from "react";
import ItemMap from "./Components/ItemMap";
import "./App.css";


function App() {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
  const response= await axios.get("http://localhost:3000/items")
  setItems(response.data)
  };
  useEffect(() => {
    fetchItems();
  }, []);

  return (

    <div className=" bg-slate-100 min-h-screen">
      <ItemMap items={items} />
    </div>
  );
}

export default App;
