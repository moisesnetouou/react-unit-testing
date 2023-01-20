import { useState } from "react";

export function App() {
  const [newItem, setNewItem] = useState('');
  const [list, setList] = useState(['Moisés', 'Besourinha', 'Gaia', 'Pirata', 'Florzinha'])

  function addToList(){
    setTimeout(()=> { //simular uma api
      setList(state => [...state, newItem])
    }, 500)
  }

  return (
    <>
      <input 
        type="text"
        placeholder="Novo item"
        value={newItem} 
        onChange={(e) => setNewItem(e.target.value)}
      />

      <button onClick={addToList}>
        Adicionar
      </button>

      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  )
}
