import './App.css';
import React, { useState, useEffect } from 'react';
import ListItems from './ListItems/ListItems';
import AppBar from './AppBar/AppBar';

function App() {
  const [mode, setMode] = useState(4);
  const handleModeChange = (value) => {
    setMode(value);
  };
  const [filters, setFilters] = useState({})

  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);

  // function fixMe(my_list) {
  //   var new_list = [];
  //   if (my_list.length % 2) {

  //     for (let item of my_list) {
  //       for (let element of item) {
  //         new_list = new_list.push(element);
  //       }
  //     }
  //   } else {
  //     new_list = my_list.flat(2);
  //   }

  //   new_list.sort(function (x, y) { return x - y })
  //   return new_list
  // }

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    await fetch('https://jsonplaceholder.typicode.com/todos/')
      .then((response) => response.json())
      .then((info) => {
        setOriginalData(info)
        setData(info)
      });
  };

  const filterData = (type) => {
    let newData = []
    if (type === 'find') {
      newData = originalData.filter((item) => {
        for (var key in filters) {
          if (filters[key] !== '') {
           
            if (item[key] === undefined || item[key] !== filters[key]) {
              return false;
            }
          }

        }
        return true;
      });
      setData(newData)
    } else {
      setData(originalData)
    }
  }

  return (
    <div className="App">
      <AppBar handleModeChange={handleModeChange} setFilters={setFilters} filterData={filterData} filters={filters} mode={mode} />
      <br />
      <ListItems mode={mode} data={data} filters={filters} />
    </div>
  );
}

export default App;
