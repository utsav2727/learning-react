import React, { useState } from 'react'

const Form = (props) => {

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
        props.dataAddHandler({
            fname: fname,
            lname: lname,
            id: new Date()
        });
        setFname('');
        setLname('');
    }

    return (
        <div>
            <form action="/action_page.php">
                <label for="fname">First name:</label>
                <input type="text" id="fname" name="fname" value={fname} onChange={(event) => setFname(event.target.value)} />
                <label for="lname">Last name:</label>
                <input type="text" id="lname" name="lname" value={lname} onChange={(event) => setLname(event.target.value)} />
                <input type="submit" value="Submit" onClick={submitHandler} />
            </form >
        </div >
    )
}

export default Form
