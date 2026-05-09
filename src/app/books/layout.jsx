import Navbar from '@/components/nav/Navbar';
import React from 'react';

const BooksPageLayout = ({children}) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
        </div>
    );
};

export default BooksPageLayout;