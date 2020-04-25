import React from 'react';

const Members = ({teamMembers}) => {
    console.log(teamMembers)

    return (
        <div>
            {teamMembers.map(teamMembers => (
                <div>
                    <h2> {teamMembers.name} </h2>
                    <p> {teamMembers.email} </p>
                    <p> {teamMembers.role} </p>
                </div>
            ))}
        </div>
    );
};

export default Members;