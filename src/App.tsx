import './App.css'

function App() {
  const title = 'TITLE'
  const id = "cp-1"
  const urgency = "Urgent"
  const desc = "To do by tomorrow"
  return (
    <div className="border rounded-lg px-2 m-2 bg-gray-50">
      <div className='text-base font-semibold py-2'>
        {title}
      </div>
      <div className="text-xs">
        {desc}
      </div>
      <div className='text-xs flex justify-between py-2 text-gray-500'>
        <div>{id}</div>
        <div>{urgency}</div> 
      </div>
    </div>
  )
}

export default App
