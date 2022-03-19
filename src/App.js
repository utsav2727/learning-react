import './App.css';
import Login from './components/Login';

function App() {
  // //This is for commit 1 and 2
  // const [data, setdata] = useState([]);

  // const dataAddHandler = (value) => {
  //   setdata(
  //     [...data, value]
  //   )
  // }
  return (
    <div>
      {/* <Form dataAddHandler={dataAddHandler} />
      <View data={data} /> */}
      <Login />
    </div>
  );
}

export default App;
