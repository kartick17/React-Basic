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
    <div className='contain'>
      <Header />
      <Menu />
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header className='header'>
      <h1>Fast React Pizza Co.</h1>
    </header>
  )
}

function Menu() {
  return (
    <main className='menu'>
      <h2>Our menu</h2>
      {
        pizzaData.length > 0 ?
          <>
            <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.</p>
            <ul className='pizzas'>
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
      ) : <p className='text-xl'>We & apos;re happy to welcome you between {openHour}:00 and {closeHour}:00</p>}
    </footer >
  )
}

function Order({ closeHour }) {
  return (
    <div className='order'>
      <p className='text-xl'>We&apos;re open until {closeHour}:00. Come visit us or order online.</p>
      <button className='btn'>Order</button>
    </div>
  )
}

function Pizza({ pizza }) {
  const { name, ingredients, photoName, price, soldOut } = pizza;

  return (
    <li className={`pizza ${soldOut ? 'sold-out' : ''}`} >
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? 'Sold Out' : price}</span>
      </div>
    </li >
  )
}

export default App