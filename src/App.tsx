import motto from './assets/motto.svg'
import saki from './assets/saki.svg'
import maru from './assets/maru.svg'

function App() {
  return (
    <div className="px-7 py-5 w-full flex flex-col justify-center">
      <div className="w-full flex">
          <img src={motto} className='w-10'></img>
          <div className='grow'>
            <div className='flex justify-center'>
              <img src={maru} className='w-8 pt-1'></img>
            </div>
          </div>
          <img src={motto} className='w-10'></img>
      </div>
      <div className='font-medium pt-5 px-1'>
        <h1 className='text-4xl pb-3'>松モット</h1>
        <h2 className='text-2xl text-[#29408b]'>質問に答えて、
          <span className='inline-block'>必要な情報を</span>
          <span className='inline-block'>簡単に見つけよう</span>
          <img src={saki} className='w-7 mb-1 ml-2 inline'/>
        </h2>
        <div className='text-2xl pt-3 border-b-2 border-neutral-500'>
          <Sentaku cl='mr-2 pb-2' text='暮らし'/>
          <Sentaku cl='mr-2 pb-2' text='観光'/>
          <Sentaku cl='pb-3' text='その他'/>                    
        </div>
        <div className='text-2xl pt-3'>
          <Sentaku cl='mr-4 pb-2' text='手続き'/>
          <Sentaku cl='mr-4 pb-2' text='ごみ資源'/>
          <Sentaku cl='pb-3' text='その他'/> 
        </div>
      </div>
    </div>
  )
}

export default App

function Sentaku({cl, text}: {cl: string, text: string}) {
  return (
    <button className={cl}><img src={maru} className='w-6 inline mr-2 mb-1'/>{text}</button>
  )
}
