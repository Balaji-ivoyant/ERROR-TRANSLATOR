import React from 'react';
import './Header.css';
import { Input, Space, } from 'antd';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
import { HeaderLogo } from './assets/HeaderLogo';
import {UserProfile} from './assets/UserProfile';
import SearchBar from '../searchbar/SearchBar';



const Header = () => {
    return (
        <>
              <div className='header'>
            <div className='header-left'>
                <div className='logo'>
                    <HeaderLogo/>

                    </div>
                    <span style={{fontFamily:'Poppins',fontSize:'16px',fontWeight:'500',color:'#2F54EB'}}>
                        Error Translator
                    </span>
                
            </div>
            <div className="header-center">
                    <Space>
                        <SearchBar/>
                        
                </Space>

            </div>
                <div className='header-right'>
                    <div>
                        <UserProfile/>

                    </div>
               

            </div>
      
      </div>
        </>
  )
}

export default Header