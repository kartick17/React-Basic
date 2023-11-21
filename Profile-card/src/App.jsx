import image from './assets/jonas.png'

function App() {
  return (
    <div className='w-72 border-2 border-black m-10'>
      <img src={image} alt="Jonas" className='h-44 w-72' />
      <div className='m-4 font-sans '>
        <h2 className='text-3xl font-semibold font-mono'>Kartick Sadhu</h2>
        <p className=''>Lorem ipsum dolor sit amet the consectetur adipisicing elit. It Voluptatum consequatur a the laboriosam sit eum.</p>

        <div className='flex flex-wrap'>
          <p className='bg-blue-600 px-3 py-1 m-4'>HTML + CSS</p>
          <p className='bg-yellow-400 px-3 py-1 m-4'>JavaScript</p>
          <p className='bg-slate-300 px-3 py-1 m-4'>Web Design</p>
          <p className='bg-green-300 px-3 py-1 m-4'>Git & Github</p>
          <p className='bg-red-300 px-3 py-1 m-4'>ReactJS</p>
          <p className='bg-cyan-300 px-3 py-1 m-4'>NodeJS</p>
        </div>
      </div>
    </div>
  )
}

export default App