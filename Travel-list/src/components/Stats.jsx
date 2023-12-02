export default function Stats({ items }) {
  // eslint-disable-next-line react/prop-types
  if (!items.length)
    return <h3 className="bg-teal-400 text-amber-950 py-6 font-semibold italic text-xl text-center">
      Start adding some items to your packing list!
    </h3>

  const numItems = items.length;
  const packed = items.filter(item => item.packed).length;

  let percentage = Math.round((packed / numItems) * 100)

  return <h3 className="bg-teal-400 text-amber-950 py-6 font-semibold italic text-xl text-center">
    {percentage === 100 ? `You got everything! Ready to go!` : `You have ${numItems} items on your list, and you already packed ${packed}(${percentage}%)`}
  </h3>
}