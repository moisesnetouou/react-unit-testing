import { useState } from "react";

type ListProps = {
  initialItems: string[]
}

export function List({initialItems}: ListProps) {
  const [newItem, setNewItem] = useState('');
  const [list, setList] = useState(initialItems)

  function addToList(){
    setTimeout(()=> { //simular uma api
      setList(state => [...state, newItem])
    }, 500)
  }

  function removeFromList(itemList: string){
    setTimeout(()=> { //simular uma api
      setList(state => state.filter((item) => item !== itemList))
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
          <li key={item}>
            {item}
            <button onClick={()=> removeFromList(item)}>Remover</button>
          </li>
        ))}
      </ul>
    </>
  )
}
