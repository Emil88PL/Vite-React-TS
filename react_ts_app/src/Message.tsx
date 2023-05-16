import React from 'react';

function Message() {

    let items = [1];
    const name = "";
    
    // Inline condition statements - in {} after condition &&
    const getMessage = () =>{
       // return items.length === 0 ? <p>No items</p> : null;
        return items.length === 0 && <p>No items</p>;

    }

    return (
        <>
        {getMessage()}
        {(name) && <h1>Hello, {name}! This is TS in React and I can't sleep</h1>}
        {(!name) && <h1>Hello, stranger! This is TS in React and I can't sleep</h1>}

        <p>Have to learn more... have to do more...</p>
        </>
    )
        // Babel translator 

};

export default Message;