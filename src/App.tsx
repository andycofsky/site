import loadingIcon from './assets/react.svg'

function App() {

  return (
    <>
      <div className='w-screen h-screen flex justify-center items-center bg-conic-180 from-cyan-200 via-indigo-50 to-cyan-200'>
        <div className='mt-4 justify-items-center'>
          <img src={loadingIcon} className='size-32 animate-spin' />
          <p className='mt-4 font-semibold text-cyan-950'>⚠️ SITE BUILDING IN PROGRESS ⚠️</p>
        </div>
      </div>
    </>
  )
}

export default App
