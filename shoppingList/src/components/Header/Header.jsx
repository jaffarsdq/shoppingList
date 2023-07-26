import HeaderImage from '../../assets/header_image.svg'
import './Header.css'

function Header() {
    return (
        <div className="header-wrapper">
            <h1 className='header-text'>
                Shopping List
            </h1>

            <img 
                src={HeaderImage}
                alt="" 
                className="header-image" />
        </div>
    )
}


export default Header;