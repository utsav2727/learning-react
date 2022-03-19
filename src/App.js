import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import View from './components/View';

function App() {

  const [data, setdata] = useState([]);

  const dataAddHandler = (value) => {
    setdata(
      [...data, value]
    )
  }
  return (
    <div>
      <Form dataAddHandler={dataAddHandler} />
      <View data={data} />
    </div>
  );
}

export default App;
