import motto from './assets/motto.svg'
import saki from './assets/saki.svg'

function App() {
  return (
    <div className="px-7 py-5 w-full flex flex-col justify-center">
      <div className="w-full flex">
          <img src={motto} className='w-10'></img>
          <div className='grow'>
            <div className='flex justify-center'>
              <img src={motto} className='w-10'></img>
            </div>
          </div>
          <img src={motto} className='w-10'></img>
      </div>
      <div className='font-medium pt-5'>
        <h1 className='text-4xl pb-3'>松本市</h1>
        <h2 className='text-2xl text-[#29408b]'>質問に答えて、必要な情報を
          <span className='inline-block'>簡単に見つけよう</span>
          <img src={saki} className='w-7 mb-1 ml-2 inline'/>
        </h2>
      </div>
    </div>
  )
}

export default App
