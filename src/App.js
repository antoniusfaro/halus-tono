import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
import TodoList from "./components/containers/TodoList";

export const TodosContext = React.createContext();
function App() {
  const [todos, setTodos] = useState([]);
  const firebaseConfig = {
    apiKey: "AIzaSyB1XxHle_3ySsaTtWgGCyhr_HDtP9fOo1k",
    authDomain: "halus-tono.firebaseapp.com",
    databaseURL: "https://halus-tono-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "halus-tono",
    storageBucket: "halus-tono.appspot.com",
    messagingSenderId: "1091459488660",
    appId: "1:1091459488660:web:c69190dd05537aa64dcd81"
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized, use that one
  }
  console.log(todos);
  useEffect(() => {
    const starCountRef = firebase.database().ref('/todos');
    starCountRef.on('value', (snapshot) => {
      if (snapshot.exists()) {
        setTodos(snapshot.val());
      } else {
        console.log('No data avaiable!');
      }
    });
  }, []);
  return (
    <div className="App">
      <TodosContext.Provider value={todos}>
        <TodoList />
      </TodosContext.Provider>
    </div>
  );
}

export default App;
