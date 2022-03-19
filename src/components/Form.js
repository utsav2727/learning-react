import React, { useRef } from 'react'

const Form = (props) => {
    const fnameref = useRef();
    const lnameref = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(fnameref);
        const fname = fnameref.current.value;
        const lname = lnameref.current.value;
        props.dataAddHandler({
            fname: fname,
            lname: lname,
            id: new Date()
        });
        fnameref.current.value = '';
        lnameref.current.value = '';
    }

    return (
        <div>
            <form action="/action_page.php">
                <label htmlFor="fname">First name:</label>
                <input type="text" id="fname" name="fname" ref={fnameref} />
                <label htmlFor="lname">Last name:</label>
                <input type="text" id="lname" name="lname" ref={lnameref} />
                <input type="submit" value="Submit" onClick={submitHandler} />
            </form >
        </div >
    )
}

export default Form
