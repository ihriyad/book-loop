import Navbar from '@/components/nav/Navbar';
import React from 'react';

const ProfilePageLayout = ({children}) => {

    return (
        <div>
            <Navbar></Navbar>
            {children}
        </div>
    );
};

export default ProfilePageLayout;