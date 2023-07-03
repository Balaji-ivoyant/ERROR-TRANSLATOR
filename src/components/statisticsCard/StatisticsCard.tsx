import React from 'react';
import './StatisticsCard.css';
import {Space,Dropdown,Button,MenuProps}from'antd';
import {DownOutlined } from '@ant-design/icons';
import ErrorCards from './ErrorCards';
const items = [
  {
    label: '1st menu item',
    key: '1',
    
  },
  {
    label: '2nd menu item',
    key: '2',
    
  },
  {
    label: '3rd menu item',
    key: '3',
   
  },
  {
    label: '4rd menu item',
    key: '4',
    
  },
];

const menuProps = {
  items,
  
};
const StatisticsCard = () => {
  return (
    <div className='body-container'>
      <div className='card' >

          <div className="select-proj">
                <Dropdown menu={menuProps}>
      <Button>
        <Space>
          Select Project
                          <DownOutlined style={{paddingLeft:'16px'} } />
        </Space>
      </Button>
    </Dropdown>
              
              
          </div>
    
              <ErrorCards/>
              
          
         
    </div>
     {/* <div>
         table content
     </div> */}
    </div>
    
  
  )
}

export default StatisticsCard