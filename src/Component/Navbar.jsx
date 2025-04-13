import React, { useState } from 'react'
import { HiOutlineMenu } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import ChangeBg from '../ChangeBg'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className="w-full">
            <div className="bg-white bg-opacity-65 font-Poppins flex justify-between items-center p-5 sticky top-0">
    
                    <h2 className="font-Oswald font-base text-2xl text-black"> <strong>T</strong> Book</h2>
                    <ul className="hidden md:flex items-center gap-5 text-medium font-base cursor-pointer">
                        <Link to='/'><li>Home</li></Link>
                        <Link to='/browsebook'><li>Browse Book</li></Link>
                        <Link to="/addbooks"><li>Add books</li></Link>
                         {/* <a href={<ChangeBg/>}>hello</a> */}
                              {/* <p>  <ChangeBg/> </p>  */}
                              <div><ChangeBg/></div>
                    </ul>
                    <div className="md:hidden">
                        <HiOutlineMenu className="w-8 h-8" onClick={() => setIsOpen(!isOpen)} />
                    </div>
        
            </div>
            <div className="p-2">
                    {
                        isOpen &&
                        <ul className="md:hidden flex flex-col justify-start gap-5 bg-black rounded-sm text-white w-full text-medium font-base cursor-pointer p-3">
                            <Link to='/'><li>Home</li></Link>
                            <Link to='/browsebook'><li>Browse Book</li></Link>
                            <Link to="/addbooks"><li>Add books</li></Link>
                        </ul>
                    }
                </div>
        </nav>
  )
}

export default Navbar