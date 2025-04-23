import React from 'react';
import ProjectAss from './Project';
import ParentComponent from './ParentComponent';


const App = ()=>{

  const data = [
    { id: 1, title: 'Item 1' },
    { id: 2, title: 'Item 2' },
    { id: 3, title: 'Item 3' }
  ];

  const names = ['John', 'rex', 'Doe', 'Tersur', 'Smith'];

  return (

    <div className="App">
      <h1>names list</h1>
      <ParentComponent items={names} randerlist={(item) => <strong>{item}</strong>} className='listcomponent' />

      <h2>Number List</h2>
      <ParentComponent items={[1, 2, 3, 4, 5]} randerlist={(item) => <em>{item}</em>} />


      <h2>data list</h2>
      <ParentComponent items={data} renderItem={(item) => <strong>{item.title}</strong>} />
      <ProjectAss />
      
    </div>
  );

}

export default App;
