// import React from 'react'
import { Link } from 'react-router'

function Header() {
    return (
        <div className=' bg-amber-200'>

            <header className='flex justify-between mx-16'>
                <h2 className="text-2xl font-bold text-center text-blue-900 py-4"> Logo </h2>

                <div >
                    <button><Link to="/" className="bg-blue-900 ml-4 text-white text-xl rounded font-medium py-1 px-8 mt-4"> Register</Link> </button>
                    <button > <Link to="/login" className="bg-blue-900 ml-4 text-white text-xl rounded font-medium py-1 px-8 mt-4" > Login </Link> </button>
                    <button className="bg-blue-900 ml-4 text-white text-xl rounded font-medium py-1 px-8 mt-4"> Log Out </button>

                </div>

            </header>

        </div>
    )
}

export default Header