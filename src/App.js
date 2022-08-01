import './App.css';

function App() {

  let name = 'Neeraj'


  function updateData(){

    name = 'Jaanu' 
    alert(name);
  }
  console.warn("--------------")
  return (
    <div className="App">
    <h1>{name}</h1>
    <button className='btn btn-primary' onClick={updateData}>Update Name</button>
    </div>
  );
}

export default App;