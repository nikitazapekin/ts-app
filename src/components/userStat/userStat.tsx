import { ReactNode } from "react"
import "./userStat.css"
import { LocalGithubUser } from "../types"
//import "./userStat.css"
/*interface UserStatProps {
repos: number,
followers: number,
following: number
} */
export interface UserStatProps extends Pick<LocalGithubUser, 'repos' | 'followers' | 'following' > {

}
export const UserStat =({repos, followers, following}: UserStatProps) => (
    <div className="userStat">
    <div className="info">
<div className="infoTitle">Repos</div>
<div className="infoNumber">{repos}</div>
</div>
<div className="info">
<div className="infoTitle">Following</div>
<div className="infoNumber">{following}</div>
</div>
<div className="info">
<div className="infoTitle">Followers</div>
<div className="infoNumber">{followers}</div>
</div>
    </div>
) 