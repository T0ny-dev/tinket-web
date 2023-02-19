import './Navbar.css'

function Navbar () {
  return (
    <div className='navbar'>
      <div className='navbar__logo'>
        <img src="/logo.svg" alt="logo tinket" />
      </div>
    <div className='navbar__links'>
      <a href="#">Servicios <img src="/down.svg" alt="down icon" /></a>
      <a href="#">Cultura</a>
      <a href="#">Casos de estudio</a>
      <a href="#">Acerca Tinket</a>
      <a href="#">Blog</a>
    </div>
    <div className='navbar__button'>
      <button className='button__primary'>
        Contacto
      </button>
    </div>
    </div> 
  )
}

export default Navbar;

