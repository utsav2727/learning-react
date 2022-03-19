import React from 'react'

const View = (props) => {
    return (
        <div >
            <table style={{ marginTop: "50px", marginLeft: "auto", marginRight: "auto", border: "black solid 1px" }}>
                <thead>
                    <td>First Name</td>
                    <td>Last name</td>
                </thead>
                <tbody>
                    {props.data.map(
                        (list) => {
                            return <tr key={list.id}>
                                <td>{list.fname}</td>
                                <td>{list.lname}</td>
                            </tr>
                        }
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default View
