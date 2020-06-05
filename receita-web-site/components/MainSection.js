import React, { useState } from 'react';

const MainSection = (prosps) => {

    return(
        <div role="main" className="section">
            <hr className="hr" />
            <div id="receitas" className="container">
                <div className="row">
                    {prosps.children}
                </div>
            </div>
        </div>
    )

};

export default MainSection;
