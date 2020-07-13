import React from 'react';
import UsersList from '../components/UsersList';



const Users = () => {
    const USERS = [
        {
            id: 'ul', 
            name: 'Big Joe', 
            image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80', 
            places: 3
    }
];
    return <UsersList items={USERS} />;
};

export default Users;