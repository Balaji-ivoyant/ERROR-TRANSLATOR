import dashBoardIcon from '../assets/DashBoardIcon.svg';
import errorIcon from '../assets/ErrorIcon.svg';
import issueIcon from '../assets/IssueIcon.svg';
import projectIcon from '../assets/ProjectIcon.svg';
import './SideNavIcons.css'; 
// import supportIcon from '../assets/SupportIcon.svg';
// import adsIcon from '../assets/AdsIcon.svg';
// import negotiationIcon from '../assets/NegotiationIcon.svg';


export const DashBoardIcon =() =>{
    return(
        <img className='logo' src={dashBoardIcon} alt="dashBoardIcon" />
    )
};
export const PeopleIcon =() =>{
    return (
        <img className='logo' src={errorIcon} alt="errorIcon" height={50} width={50}/>
    )
};
export const IssueIcon =() =>{
    return (
        <img className='logo' src={issueIcon} alt="errorIcon" />
    )
};

export const ProjectIcon =() =>{ return (
    <img className='logo' src={projectIcon} alt="projectIcon" />
)};
// export const SupportIcon =()=>{
//     return (
//         <img src={supportIcon} alt="supportIcon" />
//     )
// };

// export const NegotiationIcon =() =>{
//     return (
//         <img src={negotiationIcon} alt="NegotiationIcon" />
//     )
// };

// export const AdsIcon =() =>{ return(
//     <img src={adsIcon} alt="adsIcon" />
// )};