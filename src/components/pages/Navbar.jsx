import { FiSearch } from "react-icons/fi"
import { IoAddOutline, IoFilter } from "react-icons/io5"


const Navbar = ({setisNoteCreated, setsearchquery}) => {
    const HandleNoteCreation = () => {
        setisNoteCreated(true)
      }

      const searchhandle = (e)=>{
        setsearchquery(e.target.value)
      }
  return (
    <div className="nav w-full h-[9%]  p-3 flex items-center justify-between flex-row">
    <div className="search w-[85%] rounded-md overflow-hidden border-[0.1rem] bg-[#FFFFFF] p-2 px-4 flex items-center border-zinc-400">
      <FiSearch />
      <input
        type="text"
        placeholder='Search'
        minLength={3}
        maxLength={50}
        onChange={searchhandle}
        className='bg-[#FFFFFF] w-full p-1 outline-none'
      />
    </div>
    <button className='bg-black text-white p-2.5 rounded-md px-5 flex items-center gap-1.5 text-lg'>
      <IoFilter />
      <h1>Filter</h1>
    </button>
    <button onClick={HandleNoteCreation}
      className='bg-black text-white p-2.5 rounded-md px-5 flex items-center gap-1 text-lg'>
      <IoAddOutline />
      <h1>New Note</h1>
    </button>
  </div>
  )
}

export default Navbar
