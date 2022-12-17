import React, { useState } from 'react'


export const Aboute = () => {
    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })
    const [btnText, setBtnText] = useState('Enable Dark Mode')

    const toggleStyle = () => {
        if (myStyle.color === 'black') {

            setMyStyle({
                color: 'white',
                backgroundColor: '#042743'

            })
            setBtnText('Enable Light Mode');
        }
        else {

            setMyStyle({
                color: 'black',
                backgroundColor: 'white'

            })
            setBtnText('Enable Dark Mode');

        }





    }


    return (
        <div className='container' style={myStyle} >
            <h1>About</h1>
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item" style={myStyle} >
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Analyse your text
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Browser competeble
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Easy to use
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                           
                        </div>
                    </div>
                </div>
            </div>
            <div className='container my-2'>
                <button type="button" onClick={toggleStyle} className="btn btn-primary">{btnText}</button>
            </div>
        </div>
    )



}
