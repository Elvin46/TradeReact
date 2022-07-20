import React from 'react';
import { CommonPageContainer } from '../../components/CommonPageContainer';

export const Keywords : React.FC =()=>{
   
    return (
       <CommonPageContainer>
        <main>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 leftSide">
                        <p className="text1">Create New Keyword</p>
                        <p className="text">Keywords that make it easy to find your company and its products in searches</p>
                        <input className="mb-3" placeholder="Enter Keyword" type="text"/>
                        <div className="d-flex justify-content-center">
                            <button>Save</button>
                        </div>
                    </div>
                    <div className="col-md-8 rightSide" >
                        <p>Your Keywords</p>
                        <input type="search"/>
                    </div>
                </div>
            </div>
        </main>
          
       </CommonPageContainer>
    )
}