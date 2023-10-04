
import React from "react";
import ReactLoading from "react-loading";
console.log('loading')
 
export default function Loading() {
    return (
        <div className="flex items-center justify-center h-screen">
           
            <ReactLoading type="bars" color="#0000FF"
                height={200} width={100} />
            
        </div>
    );
}