import BookDetails from '@/components/books/BookDetails';
import { getBooksDetails } from '@/lib/load-data';
import React from 'react';

const BookDetailsPage = async({params}) => {

    const {id} = await params;
    const data = await getBooksDetails(id);
    // console.log(data);
    
    return (
        <div>
            <BookDetails data={data}></BookDetails>
        </div>
    );
};

export default BookDetailsPage;