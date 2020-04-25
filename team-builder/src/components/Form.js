import React, { useState } from 'react';

const Form =({ addNewMember }) => {
    const [member, setMember] = useState({
        name: "",
        email: "",
        role: "",
    });

    const handleChanges = event => {
        setMember({
            ...member,
            [event.target.name]: event.target.value 
        })
    };

    const submit = event => {
        event.preventDefault()
        addNewMember(member)
        setMember({
            name: "",
            email: "",
            role: "",
        });
    };

    return (
        <div>
            <form onSubmit={submit}>
                <label htmlFor="name">Name</label>
                <input onChange={handleChanges} type="text" placeholder="name" name="name" id="name" value={member.name} />
                <label htmlFor="email">E-Mail</label>
                <input onChange={handleChanges} type="email" placeholder="email" name="email" id="email" value={member.email} />
                <label htmlFor="role">Role</label>
                <select onChange={handleChanges} placeholder="role" name="role" id="role" value={member.role}>
                    <option>Frontend Engineer</option>
                    <option>Backend Engineer</option>
                    <option>Designer</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form;
