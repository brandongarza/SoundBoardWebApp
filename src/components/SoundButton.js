import React from 'react'
 
export default function SoundButton(props) {

    function buttonHandler() {
        alert('You clicked me!');
    }

    return(
        <div>
            {/*TODO*/}
            <button type="button" onClick={buttonHandler}>
                Sound Button
            </button>
        </div>
    )
}