import React, {useRef} from 'react'
import declined from '../Images/Declined.png'
import approved from '../Images/Approved.png'

function Status(messageB) {

  console.log(messageB);
  let statusText = '';
  let statusColor = '';
  let imgStatus;
  const transactionStatusCheck = () => {
    if (messageB.messageB.responseText == 'Approval') {
      statusText = 'Payment Successful';
      statusColor = '#06A706';
      imgStatus = approved;
    } else {
      statusText = 'Payment Declined'
      statusColor = '#FF0000';
      imgStatus = declined
    }
  }

  transactionStatusCheck();
  return (
    <div className='status'>
      <div className='payment-status'>
        <div className='img-status'>
          <img src={imgStatus} id='img-logo'/>
        </div>
        <div className='status-txt' >{statusText}</div>
      </div>
      <div className='info-container'>
        <div className='d-info'>
          <div className='info'>
            <div> Payment Type </div> <div>{messageB.messageB.paymentType}</div>
          </div>
          <div className='info'> 
            <div> Card Type </div> <div>{messageB.messageB.cardType}</div>
          </div>
          <div className='info'> 
            <div> Mobile </div> <div>{messageB.messageB.phone}</div>
          </div>
          <div className='info'>
            <div> Email </div> <div>{messageB.messageB.email}</div>
          </div>
        </div>
        
        <div className='p-amount'>
          <div> Amount paid </div> <div>{messageB.messageB.total}</div>
        </div>
        <div className='t-id'>
          <div> Transaction id </div> <div>{messageB.messageB.gatewayTransactionId}</div>
        </div>
      </div>
      <div className='btn-c-main'>
        <div className='btn-container'>
          <button className='btn'onClick={() => {window.print()}}>PRINT</button>
          <button className='btn' onClick={() => {window.close()}}>CLOSE</button>
        </div>
      </div>
    </div>
  )
}

export default Status