import { useState } from 'react';
import './App.css'
import Logo from './Logo'
import List from './List'
import Form from './Form'
import Stats from './Stats'

function App() {
  const [items, setItems] = useState([])

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  function handleDeleteItem(id) {
    setItems(items => items.filter(item => item.id !== id))
  }

  function handleToggleItem(id) {
    setItems(items => items.map(item => item.id === id ? { ...item, packed: !item.packed } : item))
  }

  function handleClearList() {
    setItems([]);
  }


  return (
    <div className='app grid grid-rows-layout'>
      <Logo />
      <Form addNewItem={handleAddItem} />
      <List items={items} deleteItem={handleDeleteItem} toggleItem={handleToggleItem} clearList={handleClearList} />
      <Stats items={items} />
    </div>
  )
}

export default App