
function Navbar() {
  return (
    <div className='bg-gray-950 h-14 flex  w-screen shadow-md shadow-slate-950 '>
      <h1 className="  pt-2 pl-4 text-transparent font-unbounded font-semibold bg-gradient-to-tr from-purple-950 via-purple-700 to-purple-500 inline-block bg-clip-text text-4xl">BUTCON</h1>
      <div className="w-full h-full justify-end flex pr-10 items-center">
        <ul className="grid grid-cols-3 gap-6 items-center">
          <li><a href=""><i className="fa-sharp fa-solid fa-ticket  -rotate-45 fa-xl text-purple-800"></i></a></li>
          <li><a href=""><i className="fa-solid fa-cart-shopping fa-xl text-purple-800"></i></a></li>
          <li><a href=""><img src="" alt="profile picture" className="h-9 w-9 bg-gray-400 rounded-full"/></a></li>
        </ul>
      </div>
    </div>

  )
}

export default Navbar
