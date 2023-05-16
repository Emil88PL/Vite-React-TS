

function ListGroup() {


    const listgroup = [
        'Wash the dishes',
        'Walk the dog',
        'Clean the widnow',
        'Put shirt on'
    ];

    const listItems = listgroup.map(  // use unique ID generator - (like in NPM packages) UUID and Shortid 
        (item, index) => <li key={index} className="list-group-item" onClick={(e) => console.log("CLICKED!!!", {index},{item}, {e})}>{item}</li>
    );
    // SyntheticEvent (e) - Event (clientX, clientY - place where click happened), type "click", target name etc...

    return (
        <>
            <h2>Group List </h2>
            <ul className="list-group">
                {listItems}
            </ul>
        </>
    );

}

export default ListGroup;