import './App.css';

function App() {
  const fruits = ['Apple','Banana','Cherry','Date','Fig','Grape'];
  const students = ['Alice','Bob','Charlie','David','Eva'];
  return (
    <div className="App">
      <h1>Fruits List</h1>
      <ul>
        {fruits.map((fruits,index)=>(
          <li key={index}>{fruits}</li>
        ))}
      </ul>
      <h1>Selected Students for the Event</h1>
      <ol>
        {students.map((students,index)=>(
          <li key={index}>{students}</li>
        ))}
      </ol>
    </div>
    
  );
}

export default App;