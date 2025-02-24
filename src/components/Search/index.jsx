import { Button } from '@mui/material';
import './style.css';
import { IoIosSearch } from "react-icons/io";

function Search () {
  return (
    <div className="searchBox w-[100%] h-[50px] bg-[#e5e5e5] rounded-[5px] relative p-2">
      <input type="text" placeholder="search for products" className="w-full h-[35px] focus:outline-none bg-inherit p-2 text-[15px]"/>
      <button>
        <Button className='!absolute top-[8px] right-[5px] z-50 !w-[35px] h-[35px] !rounded-full !text-black'>
          <IoIosSearch className='text-black text-[22px]' />
        </Button>
      </button>
    </div>
  )
}

export default Search;