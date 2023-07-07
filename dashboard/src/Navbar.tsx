import { Icon } from '@iconify/react';
const Navbar = () => {
  return (
    <nav>
			<i className='bx bx-menu' ></i>
			<a href="#" className="nav-link">Categories</a>
			<form action="#">
				<div className="form-input">
					<input type="search" placeholder="Search..."/>
					<button type="submit" className="search-btn"><i className='bx bx-search' ></i></button>
				</div>
			</form>
			<input type="checkbox" id="switch-mode" hidden/>
			<label htmlFor="switch-mode" className="switch-mode"></label>
		
			<a href="#" className="profile">
      <Icon icon="akar-icons:person" />			</a>
		</nav>
  )
}

export default Navbar