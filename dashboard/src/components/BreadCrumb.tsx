import { Link } from "react-router-dom";

interface Props{
    title:string;
    link: string;
}
const BreadCrumb = ({title, link}:Props) => {
  return (
    <div className="breadcrumb-container">
			<div className="head-title">
				<div className="left">
					<h1>Dashboard</h1>
					<ul className="breadcrumb">
						<li>
								<Link to="/">Dashboard</Link>
						</li>
						<li><i className='bx bx-chevron-right' ></i></li>
						<li>
							<Link className="active" to={link}>{title}</Link>
						</li>
					</ul>
				</div>
			
			</div>

			
		</div>
  )
}

export default BreadCrumb