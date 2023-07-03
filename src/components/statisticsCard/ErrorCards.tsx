import React,{useState} from 'react';
import './ErrorCards.css';
import DataError from './assets/DataError';
import IssueClose from './assets/IssueClose';
type Card = {
    count: number;
    title: string;
    icon: JSX.Element;

}[];

const card: Card = [
    {
        count: 100,
        title: 'Total Defined Errors',
        icon: <IssueClose/>
    },
    {
        count: 48,
        title: 'Total No Hit Errors',
        icon: <DataError />
    },
   
    
]
const ErrorCards = () => {
  return (
      <div style={{display:'flex',margin:'6px'}}>
          {card.map((item: any, index: number) => (
              <div key={index} className='ErrorCards'>
                  <div className='left'style={{display:'flex',flexDirection:'column',justifyContent:'space-evenly',marginRight:'4px'}}>
                       <div className="error-count">{item.count}</div>
                   <div className="card-title">{item.title}</div>
                  </div>
                  <div className="right" style={{  display: 'flex',alignSelf: 'center'}}>
                      <div className="error-icon">{ item.icon}</div>
                  </div>
              </div>
          ))
              
         } 
         
      </div>
  )
}

export default ErrorCards