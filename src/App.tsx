import motto from './assets/motto.svg'

function App() {
  return (
    <div className="px-7 py-5 w-full flex flex-col justify-center">
      <div className="w-full flex">
          <img src={motto} id='motto' className='w-10'></img>
          <div className='grow'>
            <div className='w-full place-items-center'>
              <img src={motto} id='motto' className='w-10'></img>
            </div>
          </div>
          <img src={motto} id='motto' className='w-10'></img>
      </div>
    </div>
  )
}

export default App
