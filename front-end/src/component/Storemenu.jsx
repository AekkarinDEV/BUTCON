

export default function Storemenu() {
  return (
    <div className="w-1/6 h-5/6 rounded-md sticky mb-0 mt-10  ml-8 bg-gradient-to-t from-slate-800 via-slate-700 to-slate-700">
      <div id="serchBar" className="pt-3 pl-3 flex items-center gap-2 mb-3">
        <i className="fa-solid fa-magnifying-glass text-xl"></i>
        <form action="">
          <input type="text" className="rounded-full w-11/12 pl-2 pr-2 text-lg" />
        </form>
      </div>
      <hr className="w-10/12 rounded-2xl  m-auto mb-3"></hr>
      <ul className="items-center pl-6 grid gap-3 text-xl font-chakra font-semibold text-violet-400 ">
        <li><a href="" className=" hover:text-2xl duration-150 text-white">
          <i className="fa-solid fa-thumbs-up bg-gradient-to-t from-blue-700 via-blue-400 to-blue-50 text-transparent bg-clip-text"></i> แนะนำ</a></li>
        <li><a href="" className=" hover:text-2xl duration-150 text-white">
          <i className="fa-solid fa-fire bg-gradient-to-t from-amber-900 via-amber-500 to-yellow-400 text-transparent bg-clip-text"></i> ยอดนิยม</a></li>
        <li><p className="text-white "><i className="fa-solid fa-list text-zinc-400"></i>  หมวดหมู่</p></li>
      </ul>
      <form action="" className="ml-12 space-y-3 mt-1">
        <input type="checkbox"name="festival" id="festival"/>
        <label htmlFor="festival" className="text-lg font-chakra font-medium text-gray-400 hover:text-xl duration-150"> เทศกาลดนตรี</label><br />
        <input type="checkbox"name="thai-artist" id="thai-artist"/>
        <label htmlFor="thai-artist" className="text-lg font-chakra font-medium text-gray-400 hover:text-xl duration-150"> ศิลปินไทย</label><br />
        <input type="checkbox"name="nation-artist" id="nation-artist"/>
        <label htmlFor="nation-artist" className="text-lg font-chakra font-medium text-gray-400 hover:text-xl duration-150"> ศิลปินต่างชาติ</label><br />
        <input type="checkbox"name="idol" id="idol"/>
        <label htmlFor="idol" className="text-lg font-chakra font-medium text-gray-400 hover:text-xl duration-150"> วงไอดอล</label><br />
        <input type="checkbox"name="ochestra" id="ochestra"/>
        <label htmlFor="ochestra" className="text-lg font-chakra font-medium text-gray-400 hover:text-xl duration-150"> ออเครสตรา</label><br />
        <input type="checkbox"name="comp" id="comp"/>
        <label htmlFor="comp" className="text-lg font-chakra font-medium text-gray-400 hover:text-xl duration-150"> งานประกวด/แข่งขัน</label><br />
      </form>
    </div>

  )
}
