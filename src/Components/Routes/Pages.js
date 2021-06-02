import {Link} from 'react-router-dom';
const Pages = () =>{
  const pages = [
    {href: '/', name: 'Home', id: 1},
    {href: '/about', name: 'About', id: 2},
    {href: '/products', name: 'Product', id: 3},
    {href: '/store', name: 'Store', id: 4}
  ];

  return <ul className="navbar-nav mx-auto">
    {pages.map((page) =>{
      return <li key={page.id} className="nav-item px-lg-4">
        <Link to={page.href} className="nav-link text-uppercase">{page.name}</Link>
      </li>
    })}
  </ul>
}

export default Pages