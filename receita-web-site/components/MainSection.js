import React from 'react';

const MainSection = (prosps) => {

    return(
        <main role="main">
            <hr className="hr mt-1" />
            <div id="receitas" className="container mt-4">
                <div className="row">
                    {prosps.children}
                </div>
            </div>
        </main>
    )

};

export default MainSection;
