import React, {useRef} from 'react'
import ReactToPrint from 'react-to-print'
import Status from './Status';
import '../App.css';

function Print() {
    let componentRef = useRef();
  return (
    <div >
        <ReactToPrint 
            trigger={() => <button className='btn'>Print</button>}
            content={() => componentRef}
        />
        <div>
            <Status ref={(el) => (componentRef = el)}/>
        </div>
    </div>
  )
}

export default Print