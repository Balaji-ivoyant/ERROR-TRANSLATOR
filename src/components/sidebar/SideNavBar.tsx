import React,{useState} from 'react';
import { DashBoardIcon, PeopleIcon, ProjectIcon, IssueIcon} from './assets/SideNavIcon';
import './SideNavBar.css';


const sidebarItems =[
    {
        path:'/dashboard',
        name:'Dashboard',
        icon: <DashBoardIcon />,

    },
    {
        path:'/errors',
        name:'Error',
        icon:<PeopleIcon/>,
        
    },
    {
        path:'/issues',
        name:'Issues',
        icon:<IssueIcon/>,
    },
    {
        path:'/projects',
        name:'Projects',
        icon:<ProjectIcon/>,
    },
    // {
    //     path:'/support',
    //     name:'Support',
    //     icon:<SupportIcon/>,
    // },
    // {
    //     path:'./negotiation',
    //     name:'Negotiation',
    //     icon:<NegotiationIcon/>,
    // },
    // {
    //     path:'/ads',
    //     name:'Ads',
    //     icon:<AdsIcon/>,
    // }

]


const SideNavBar = () => {
  
  return (
    <>
       <div className='sidenav' >
     
        {sidebarItems.map((item: any,index:number) =>(
          <div  className='nav-container'>
             <div key={index} className='navicons'>
                <a href={item.path}>{item.icon}
                
              </a>
              <div className='navname'>
                  {item.name}
                </div>
            </div>
            
                
          </div>

            
        ))}
        
   </div>
    </>
   
  )
}

export default SideNavBar