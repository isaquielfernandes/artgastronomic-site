import React, { useState } from 'react';

const MainSection = (prosps) => {

    return(
        <div role="main">
            <hr className="hr mt-1" />
            <div id="receitas" className="container mt-4">
                <div className="row">
                    {prosps.children}
                </div>
            </div>
        </div>
    )

};

export default MainSection;
