import userProfile from './userProfile.svg';
import '../Header.css'

export const UserProfile = () => {
    return (
        <div className="user-profile">
            <img src={userProfile} alt="user-profile" />
        </div>
    )
}
