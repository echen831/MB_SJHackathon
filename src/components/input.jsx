import React, { useState, useRef } from 'react';

export const Input = ({ add }) => {
    const [name, setName] = useState('');

    const nameInput = useRef();
    const addressInput = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        add({ name: nameInput.current.value, address: addressInput.current.value })
        nameInput.current.value = '';
        addressInput.current.value = '';
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder='Your name here...' ref={nameInput}/>
                <input type="text" placeholder='Your address here...'ref={addressInput}/>
                <button>Submit</button>
            </form>
        </div>
    )
}