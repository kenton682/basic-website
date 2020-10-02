import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from '../components/Button';

const LoginButton = (props) => {
    const { loginWithRedirect, isAuthenticated} = useAuth0();
    return (
        !isAuthenticated && (
        <Button onClick={() => loginWithRedirect()}>
            {props.children}
        </Button>
        )
    );
};

export default LoginButton;