
import React, { useState } from 'react';
import HomePage from './HomePage';

function RTL() {
    const [state, setstate] = useState("");

    return (
        <>
            <div>
                <HomePage/>
            </div>
        </>

    );
}

export default RTL;
