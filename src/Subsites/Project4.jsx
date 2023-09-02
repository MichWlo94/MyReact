import React, { useState } from 'react';
import User from '../ComponentsProject4/User';
import Card from '../ComponentsProject4/Card';

const Project4 = () => {
    const [userList, setUserList] = useState([]);


    // Add a new user to the list using a function that takes the user data as an argument
    const addUser = (user) => {
        setUserList((prevUserList) => {
            return [...prevUserList, user]});
    };

    // Delete a user from the list based on the index 
    const deleteUser = (index) => {
        const updatedList = [...userList];
        updatedList.splice(index, 1);
        setUserList(updatedList);
    };

    return (
        <div className="flex flex-col h-screen font-lobster bg-gradient-to-b from-slate-400 via-stone-600 to-slate-800">
            <User onInput={addUser} /> {/* Pass the user data to the parent component */}
            <div className="mb-3 text-2xl text-center text-white">
                {userList.length === 0 ? 'Please enter your data' : null}
            </div>
            <div className="flex flex-col font-lobster">
                {userList.map((user, index) => (
                    <Card key={index} show={user} onDelete={() => deleteUser(index)} />
                ))}
            </div>
        </div>
    );
};

export default Project4;
