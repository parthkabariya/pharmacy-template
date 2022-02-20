import React from 'react';

export default function Button({ type = 'submit', className = '', processing, children }) {
    console.log(className);
    return (
        <button
            type={type}
            className={
                `inline-flex items-center border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest active:bg-gray-800 transition ease-in-out duration-150 ${
                    processing && 'opacity-25'
                } ` + className
            }
            disabled={processing}
        >
            {children}
        </button>
    );
}
