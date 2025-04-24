import React from 'react';
import useFetch from './Project';
import ListComponent from './ListComponent';
import ParentComponent from './ParentComponent';

// Collection of data inform of object 
const App = ()=>{

  const data = [
    { id: 1, name: 'Tersur' },
    { id: 2, name: 'Rex' },
    { id: 3, name: 'Iorver' }
  ];

  // array of names

  const names = ['John', 'rex', 'Doe', 'Tersur', 'Smith'];

  const { data: fetchedData, error } = useFetch("https://api.example.com/data");

  return (

    <div className="App">
      <h1>List Component</h1>
      <ListComponent items={names} renderItem={(item) => <strong>{item}</strong>} />
      <h2>List Component with Custom Render Function</h2>
       
      {error && <p>Error: {error.message}</p>}
      {!fetchedData && !error && <p>Loading...</p>}
      {fetchedData && <ul>{fetchedData.map((item) => <li key={item.id}>{item.name}</li>)}</ul>}
      <ParentComponent items={names} randerlist={(item) => <strong>{item}</strong>} className='listcomponent' />

      <h2>Number List</h2>
      <ParentComponent items={[1, 2, 3, 4, 5]} randerlist={(item) => <em>{item}</em>} />


      <h2>data list</h2>
      <ParentComponent items={data} renderItem={(item) => <strong>{item.title}</strong>} />
      
      
    </div>
  );

}

export default App;
