import React, { useState } from 'react';

const MainSection = (prosps) => {

    return(
        <div role="main" className="">
            <hr className="hr" />
            <div id="receitas" className="container mt-5">
                <div className="row">
                    {prosps.children}
                </div>
            </div>
        </div>
    )

};

export default MainSection;
