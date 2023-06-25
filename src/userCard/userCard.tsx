import { ReactNode } from "react"
import "./userCard.css"
import { UserStat, UserStatProps } from "../components/userStat/userStat"
import { LocalGithubUser } from "../components/types"
import { UserTitle } from "../components/userTitle/userTitle"
import { UserInfo } from "../components/userInfo/userInfo"
interface UserCardProps extends LocalGithubUser {

}

export const UserCard =(props: UserCardProps) => (
    <div className="userCard">
        <img src={props.avatar} alt="avatar" className="avatar" />
        <UserTitle
        created={props.created}
        login={props.login}
        name={props.name}
        />
        <p className="bio">
            {props.bio || "This profile hasnt text"}
        </p>
<UserStat 
repos={props.repos}
followers={props.followers}
following={props.following}
/>
<UserInfo
blog={props.blog}
company={props.company}
location={props.location}
twitter={props.twitter}
/>
    </div>
) 