import React from 'react';
import TableView from './TableView';
import './index.css';

const App = () => {
  const data = [
    {ID : 1 , Name : 'Mani' ,   Age : 100000},
    {ID : 2 , Name : 'Ram'   ,   Age : 21},
    {ID : 3 , Name : 'Krishna' ,   Age : 21},
    {ID : 4 , Name : 'Shiva' ,   Age : 20},
    {ID : 5 , Name : 'Hari'  ,   Age : 21},

  ];

  return (
    <div>
      <h1 style = {{ textAlign : 'center' , borderBottom : '2px solid blue' , paddingTop : '20px',marginBottom : '100px'}}>
        Array of Objects - TableView
      </h1>
      <TableView data= {data} />
    </div>
  );
};

export default App;
