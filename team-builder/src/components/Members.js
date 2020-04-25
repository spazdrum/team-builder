import React from 'react';

const Members = ({teamMembers}) => {
    console.log(teamMembers)

    return (
        <div>
            {teamMembers.map(teamMember => (
                <div>
                    <h2> {teamMember.name} </h2>
                    <p> {teamMember.email} </p>
                    <p> {teamMember.role} </p>
                </div>
            ))}
        </div>
    );
};

export default Members;