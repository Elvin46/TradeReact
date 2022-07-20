import React from 'react';
import { CommonPageContainer } from '../../components/CommonPageContainer';
import {Link} from 'react-router-dom'
<<<<<<< HEAD
import { APP_ROUTES } from '../../consts';
=======

>>>>>>> 188f35447f3c47f110e1a56975d8679c191f138c
export const MyDemands : React.FC =()=>{
   
    return (
       <CommonPageContainer>
        <main>
            <div className="demands-header d-flex align-items-center justify-content-between row">
<<<<<<< HEAD
                    <div className="inputs col-md-6 col-sm-12 text-center">
=======
                    <div className="inputs col-md-6 col-sm-12">
>>>>>>> 188f35447f3c47f110e1a56975d8679c191f138c
                        <input placeholder="Search by Date" type="date"/>
                        <input placeholder="Search results" type="search"/>
                    </div>
                    <div className='col-md-6 col-sm-12 d-flex justify-content-end newDemand'>
<<<<<<< HEAD
                        <Link to={APP_ROUTES.DEMANDS.CREATE_PATH}>
=======
                        <Link to={'/newDemand'}>
>>>>>>> 188f35447f3c47f110e1a56975d8679c191f138c
                            <button className="demond-button">New Demond</button>
                        </Link>
                    </div>
            </div>

            <div className="secondDiv">
               <div className="">
                    <div className="d-flex justify-content-between row" style={{padding:'25px'}}>
                            <div className='col-md-4 col-sm-12'>
                                <p style={{fontWeight:'bold'}}>Food purchase demand</p>
                                <p>Cameroon</p>
                            </div>
                            <div className='col-md-4 col-sm-12 d-flex justify-content-end'>
                                <span style={{marginLeft:'10px'}}>Last bid date : <span style={{fontWeight:'bold'}}>05.01.2022</span></span>
                                <span>Last bid time : <span style={{fontWeight:'bold'}}> 18:00</span></span>
                               
                            </div>
                            <div className='col-md-4 d-flex justify-content-end'>
                            <div style={{marginLeft:10}}>
                                    <a style={{color:'#d85a54',fontSize:'24px',textDecoration: 'none'}} href="#">...</a>
                            </div>
                            </div>
                    </div>
                </div>
                
                    <div className='col-lg-12' style={{padding:'25px'}} >
                        <p style={{fontWeight:'bold'}}>Detail</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, enim? Id distinctio quidem ea? Tempore quidem temporibus optio impedit fugiat similique culpa tenetur necessitatibus itaque! Minima omnis pariatur alias hic?</p>
                    </div>

                    <div style={{padding:'25px'}} >
                    <div className=" d-flex justify-content-between">
                        <p style={{fontWeight:'bold'}}>Incoming Offers</p>
                        <p ><a style={{color:'#d85a54',fontSize:'12px',textDecoration: 'none'}} href="#">Show All</a></p>
                    </div>
                
                <ul className="offers">
                        <li className="d-flex justify-content-between align-items-center row"> 
                            <div className='col-md-6 col-sm-12'>
                                {/* <img src="" alt=""> */}
                                Date: <span style={{fontWeight:'500'}}>01.01.2022/18:00</span> 
                            </div>
                            <div className="d-flex align-items-center justify-content-end col-md-6 col-sm-12">
                                    <div className="icon-div">
                                        <i className="fa-solid fa-comment" style={{color:'#fafafa'}}></i>
                                    </div>
                                    <p className="money d-flex justify-content-center align-items-center">15.000 USD</p>
                            </div>
                        </li>
                    </ul>
                    </div>
              
            </div>
        </main>
          
       </CommonPageContainer>
    )
}