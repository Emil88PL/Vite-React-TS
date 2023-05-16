//import { MouseEvent } from "react";

import { useState } from "react";




    // Interface
    // {items: [], headings: string}
    interface Props {
        items: string[], 
        headings: string
    }

    function ListGroup({items, headings}: Props) {

   // using props we can pass data to our components

 
    const [selectedIndex, setSelectedIndex] = useState(-1);
    // data that can change over time
    

    //const [name, setName] = useState(" ");

    // const handleClick = (e: MouseEvent, item: string, index: number) => {
    //     console.log("CLICKED!!!", item, index, e);
    // };

    const listItems = items.map((item, index) => (
        <li key={index} className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'} onClick={() => {setSelectedIndex(index)}}>{item}</li>
    ));

    // SyntheticEvent (e) - Event (clientX, clientY - place where click happened), type "click", target name etc...

    
    return (
        <>
            <h2>{headings}</h2>
            <ul className="list-group">{listItems}</ul>
        </>
    );

}

export default ListGroup;