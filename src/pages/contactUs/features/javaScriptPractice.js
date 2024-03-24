import React from 'react'

const JavaScriptPractice = () => {
    var a = "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    var b = 23 + 90 + 'oniok';

    return (
        <div className='page_width'>JavaScriptPractice
            <p>
                {a}
            </p>
            <p>
                {b}
            </p>
        </div>
    )
}

export default JavaScriptPractice