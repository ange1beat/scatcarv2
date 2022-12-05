import logo from './images/logo.png';
import {Link} from 'react-router-dom';

function Header() {
    return (
            <div className="flex items-center justify-center text-white p-5">
                <Link to='/' className='sm:mr-[10%] m-auto rounded-md hover:backdrop-blur-sm hover:bg-white/30 hover:rounded-md p-3 transition ease-in-out'><div>СОЗДАЕМ</div></Link>
                <Link to='/' className='justify-center'><div className='w-[100px]'><img src={logo} alt='logo' className='w-[100px]'/></div></Link>
                <Link to='/' className='sm:ml-[10%] m-auto rounded-md hover:backdrop-blur-sm hover:bg-white/30 hover:rounded-md p-3 transition ease-in-out'><div>БУДУЩЕЕ</div></Link>
            </div>
    )
}

export default Header;