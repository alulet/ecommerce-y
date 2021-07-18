import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <div className="">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a classNames="navbar-brand" href="#">Tienda de Alfajores</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a classNames="nav-link" href="#">Nosotros</a>
      </li>
      <li className="nav-item dropdown">
        <a claclassNamess="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Alfajores
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">Dulce de Leche</a>
          <a className="dropdown-item" href="#">Sin Tacc</a>
          <a className="dropdown-item" href="#">Veganos</a>
        </div>
      </li>
    </ul>
  </div>
  <div> <CartWidget/> </div>
</nav>


    </div>
  );
}

export default NavBar;