import React from 'react';

function Welcome() {
    return <h1>Welcome, user</h1>;
}

function SignUp() {
    return <h1>Please Register to login</h1>;
}

function User(props) {
    if (props.loggedin) {
        return <Welcome />;
    } else {
        return <SignUp />;
    }
}

export default User;