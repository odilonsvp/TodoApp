// import { memo } from 'react';
import React from 'react';

export const Small = React.memo( ({ value }) => {
    console.log('Dibujando de nuevo')

    return (
            <small>{ value }</small>
    )

})