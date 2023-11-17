import './App.css'
const pizzaData = [
  {
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName: 'pizzas/focaccia.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    photoName: 'pizzas/margherita.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    photoName: 'pizzas/spinaci.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    photoName: 'pizzas/funghi.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    photoName: 'pizzas/salamino.jpg',
    soldOut: true,
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: 'pizzas/prosciutto.jpg',
    soldOut: false,
  },
]

function App() {
  return (
    <div className='w-[130rem] flex mx-auto flex-col gap-20 items-center mt-5'>
      <Header />
      <Menu />
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header className='self-stretch header'>
      <h1 className='text-[#edc84b] uppercase text-center font-light text-8xl tracking-widest relative w-full block'>
        Fast React Pizza Co.
      </h1>
    </header>
  )
}

function Menu() {
  return (
    <main className='flex flex-col items-center gap-16'>
      <h2 className='inline-block py-4 border-y-2 border-stone-800 text-3xl uppercase tracking-widest font-medium'>Our menu</h2>
      {
        pizzaData.length > 0 ?
          <>
            <p className='text-2xl text-center w-3/4'>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.</p>
            <ul className='grid grid-cols-2 gap-20'>
              {pizzaData.map(pizza => <Pizza pizza={pizza} key={pizza.name} />)}
            </ul>
          </>
          : <p>We&apos;re still working on our menu. Please come back later :)</p>
      }
    </main>
  )
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 23;
  const isOpen = hour >= openHour && hour <= closeHour;

  console.log(isOpen)
  return (
    <footer>
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : <p className='text-2xl'>We & apos;re happy to welcome you between {openHour}:00 and {closeHour}:00</p>}
    </footer >
  )
}

function Order({ closeHour }) {
  return (
    <div className='flex flex-col items-center gap-10'>
      <p className='text-2xl'>We&apos;re open until {closeHour}:00. Come visit us or order online.</p>
      <button className='text-2xl font-medium bg-[#edc84b] py-6 px-12 cursor-pointer transition-all hover:bg-[#e9bb24]'>Order</button>
    </div>
  )
}

function Pizza({ pizza }) {
  const { name, ingredients, photoName, price, soldOut } = pizza;

  return (
    <li className={`flex gap-12 self-start ${soldOut ? 'sold-out' : ''}`} >
      <img className='w-48 self-start aspect-square' src={photoName} alt={name} />
      <div className='flex flex-col gap-3 py-2'>
        <h3 className='text-4xl font-normal'>{name}</h3>
        <p className='text-2xl font-light italic mb-auto'>{ingredients}</p>
        <span className='block text-2xl'>{soldOut ? 'Sold Out' : price}</span>
      </div>
    </li >
  )
}

export default App