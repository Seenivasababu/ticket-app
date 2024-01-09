
const Progressbar = ({progress}:any) => {
  return (
    <div className='w-full bg-gray-400 rounded-full h-2.5'>
      <div className='bg-blue-800 rounded-full h-full'  style={{ width: `${progress}%` }}> </div>
    </div>
  )
}

export default Progressbar