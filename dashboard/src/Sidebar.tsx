import { NavLink } from "react-router-dom"

const Sidebar = () => {

	const active =({ isActive }:any)=>
	(isActive ? 'active':'')
  return (
    <section id="sidebar">
		<a href="#" className="brand">
			<span className="text">Land Listing</span>
		</a>
		<ul className="side-menu top">
			<li className="">
				<NavLink to="/" className={active} >
					<i className='bx bxs-dashboard' ></i>
					<span className="text">Dashboard</span>
				</NavLink>
			</li>
			<li>
				<NavLink to="/customers" className={active}>
					<i className='bx bxs-shopping-bag-alt' ></i>
					<span className="text">Customers</span>
				</NavLink>
			</li>
			<li>
				<NavLink to="/requests" className={active}>
					<i className='bx bxs-doughnut-chart' ></i>
					<span className="text">Requests</span>
				</NavLink>
			</li>
			<li>
				<NavLink to="/properties" className={active}>
					<i className='bx bxs-message-dots' ></i>
					<span className="text">Properties</span>
				</NavLink>
			</li>
			<li>
			<NavLink to="/settings" className={active}>
					<i className='bx bxs-group' ></i>
					<span className="text">Settings</span>
				</NavLink>
			</li>
		</ul>
		<ul className="side-menu">
		
			<li>
				<a href="#" className="logout">
					<i className='bx bxs-log-out-circle' ></i>
					<span className="text">Logout</span>
				</a>
			</li>
		</ul>
	</section>
  )
}

export default Sidebar