import dashBoardIcon from '../assets/dashBoardIcon.svg';
import errorIcon from '../assets/errorIcon.svg';
import issueIcon from '../assets/issueIcon.svg';
// import negotiationIcon from '../assets/negotiationIcon.svg';
import projectsIcon from '../assets/projectsIcon.svg';
import '../SideNavBar.css';
// import supportIcon from '../assets/supportIcon.svg';
// import adsIcon from '../assets/adsIcon.svg';


export const DashBoardIcon = () => {
    
    return(
        <div  className='logo'>
            <img src={dashBoardIcon} alt="dashBoardIcon" />
        </div>
    )
};
export const PeopleIcon =() =>{
    return (
        <img className='logo' src={errorIcon} alt="errorIcon"/>
    )
};
export const IssueIcon =() =>{
    return (
        <img className='logo' src={issueIcon} alt="errorIcon" />
    )
};

export const ProjectIcon =() =>{ return (
    <img  className='logo' src={projectsIcon} alt="projectIcon" />
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