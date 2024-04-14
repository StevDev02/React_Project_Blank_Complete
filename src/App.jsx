export function App () {
  const handleClick = () => {
    console.log('Hello world!')
  }
  return (
    <>
      <h1 onClick={handleClick} className='text-3xl font-bold underline'> Hello world!
      </h1>
    </>
  )
}
