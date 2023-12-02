export default function Item({ item, deleteItem, toggleItem }) {

  return (
    <li className='flex items-center gap-3'>
      <input id={item.id} type="checkbox" className='h-4 w-4 cursor-pointer' checked={item.packed} onChange={() => toggleItem(item.id)} />
      <label htmlFor={item.id} className={`cursor-pointer font-semibold text-white ${item.packed ? 'line-through' : ''}`}>{item.quantity} {item.description} </label>
      <button className='text-red-500 font-medium text-3xl' onClick={() => deleteItem(item.id)}>&times;</button>
    </li>
  )
}