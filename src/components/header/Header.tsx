import React from 'react';
import "./Header.scss";
import { Globe,ChatLeft,Search,Bell } from 'react-bootstrap-icons';
import { Link } from "react-router-dom";
import { Home } from '../../pages/home/Home';
import { APP_ROUTES } from '../../consts';

export const Header : React.FC =()=>{
    const [isModalOpen,setModalOpen]=React.useState(false);
   let content;

    const openNotification=React.useCallback(()=>{
        setModalOpen((isModalOpen)=>!isModalOpen);
        
    },[isModalOpen])

    return (
        <>
            <nav
                id="sidebarMenu"
                className="collapse d-lg-block collapse bg-white"
                >
                <div className="position-sticky">
                    <div className="list-group list-group-flush mx-3 mt-4">
                    <ul className="navbar-nav ms-5  flex-row login-sm">
                        <li className="nav-item">
                            <Link className="nav-link nav-button" aria-current="page" to="#">Login</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link primary-button" to="#">Sign up</Link>
                        </li>
                    </ul>
                    <Link
                        id="sidebar-item"
                        to={APP_ROUTES.HOME.PATH}
                        className="list-group-item list-group-item-action py-2 ripple"
                        aria-current="true"
                        >
                        <i className="fa-solid fa-house"></i><span>Home Page</span>
                    </Link>
                    
                    <Link
                        id="sidebar-item"
                        to={APP_ROUTES.DEMANDS.PATH}
                        className="list-group-item list-group-item-action py-2 ripple"
                        >
                        <i className="fa-solid fa-earth-americas"></i><span>My Demands</span>
                    </Link>
                    <Link
                        id="sidebar-item"
                        to="#"
                        className="list-group-item list-group-item-action py-2 ripple"
                        ><i className="fa-solid fa-ticket"></i><span>My Offers</span>
                    </Link>
                    <Link
                        id="sidebar-item"
                        to={APP_ROUTES.ADS.PATH}
                        className="list-group-item list-group-item-action py-2 ripple"
                        ><i className="fa-solid fa-rectangle-ad"></i><span>My Ads</span>
                    </Link>
                    <Link
                        id="sidebar-item"
                        to="#"
                        className="list-group-item list-group-item-action py-2 ripple"
                        >
                        <i className="fa-solid fa-address-card"></i><span>Management</span>
                    </Link>
                    <Link
                        id="sidebar-item"
                        to="#"
                        className="list-group-item list-group-item-action py-2 ripple"
                        ><i className="fa-solid fa-chart-simple"></i><span>Statistics</span>
                    </Link>
                    <Link
                        id="sidebar-item"
                        to={APP_ROUTES.FAVOURITES.PATH}
                        className="list-group-item list-group-item-action py-2 ripple"
                        ><i className="fa-solid fa-heart"></i><span>Favourites</span>
                    </Link>
                    <Link
                        id="sidebar-item"
                        to={APP_ROUTES.KEYWORDS.PATH}
                        className="list-group-item list-group-item-action py-2 ripple"
                        ><i className="fa-solid fa-key"></i><span>Keywords</span>
                    </Link>
                    </div>
                </div>
            </nav>

            <nav
                id="main-navbar"
                className="navbar navbar-expand-lg navbar-light bg-white fixed-top"
                >
                <div className="container-fluid">
                <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#sidebarMenu"
                        aria-controls="sidebarMenu"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        >
                    <i className="fas fa-bars"></i>
                </button>

                <Link className="navbar-brand" to="#">
                    <img
                        src="./assets/images/Vector.png"
                        />
                        <span>Net</span>
                        Trade
               </Link>
                    <ul className="navbar-nav ms-5 flex-row login-lg">
                        <li className="nav-item">
                            <Link className="nav-link nav-button" aria-current="page" to="#">Login</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link primary-button" to="#">Sign up</Link>
                        </li>
                    </ul>
                        <ul className="navbar-nav nav-right ms-auto d-flex flex-row">
                        <li className="nav-item">
                            <Link className="nav-link membership nav-link-lg" aria-current="page" to="#"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.6 9.6H2.4V2.4H21.6M21.6 15.6H2.4V13.2H21.6M21.6 0H2.4C1.068 0 0 1.068 0 2.4V15.6C0 16.932 1.068 18 2.4 18H7.2V24L12 21.6L16.8 24V18H21.6C22.932 18 24 16.932 24 15.6V2.4C24 1.068 22.932 0 21.6 0Z" fill="#D85A54"/>
                            </svg> Membership</Link>
                            <Link className="nav-link membership nav-link-sm nav-icon-sm" aria-current="page" to="#"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.6 9.6H2.4V2.4H21.6M21.6 15.6H2.4V13.2H21.6M21.6 0H2.4C1.068 0 0 1.068 0 2.4V15.6C0 16.932 1.068 18 2.4 18H7.2V24L12 21.6L16.8 24V18H21.6C22.932 18 24 16.932 24 15.6V2.4C24 1.068 22.932 0 21.6 0Z" fill="#D85A54"/>
                            </svg></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link nav-icon" to="#"><ChatLeft size={20} fontWeight={800}/></Link>
                            
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link nav-icon" to="#"><Search size={20} fontWeight={800}/>
                           </Link>
                        </li>
                        <li className="nav-item">
                            {!!isModalOpen ? <button className="nav-link nav-icon notification-btn active" onClick={()=>openNotification()} ><Bell size={22}/></button> :<button className="nav-link nav-icon notification-btn" onClick={()=>openNotification()} ><Bell size={22}/></button>}
                            
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle nav-link-lg" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <Globe color='#D85A54' className='me-2' size={24}/>
                                English
                           </Link>
                            <Link className="nav-link dropdown-toggle nav-link-sm" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            
                            <Globe/>
                           </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><Link className="dropdown-item" to="#">Action</Link></li>
                            <li><Link className="dropdown-item" to="#">Another action</Link></li>
                            <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                            </ul>
                        </li>
                        </ul>
                </div>
                {!!isModalOpen ? <div className="modalOpen">
                    <div className="notification">
                        Latest notifications
                    </div>
                    <ul className="notification-cards d-flex align-items-center flex-column">
                        <li className="notification-card d-flex flex-row align-items-center">
                        <div className="card-profile">IB</div>
                        <div className="ps-3 notification-info"> 
                            <p className="name">Ilkin Bayramov</p>
                            <p className="work">UI/UX</p>
                            <p className="date">7 hours ago</p>
                        </div>
                        </li>
                        <li className="notification-card d-flex flex-row align-items-center">
                        <div className="card-profile">IB</div>
                        <div className="ps-3 notification-info"> 
                            <p className="name">Ilkin Bayramov</p>
                            <p className="work">UI/UX</p>
                            <p className="date">7 hours ago</p>
                        </div>
                        </li>
                    </ul>
                    <Link className="nav-link primary-button " to={APP_ROUTES.NOTIFICATIONS.PATH}>All Notifications</Link>
                </div>: <></>}

            </nav>
        </>
    )
}
