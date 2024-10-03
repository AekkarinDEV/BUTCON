import Advertisement from "../component/Advertisement"
import Store from "../component/Store"

export default function Userpage() {
  return (
    <div className="h-screen  bg-gray-950 overflow-auto no-scrollbar">
       <Advertisement/>
       <Store/>
    </div>
  )
}
