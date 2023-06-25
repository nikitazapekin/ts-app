import { ReactNode } from "react"

import "./userInfo.css"
import { LocalGithubUser } from "../types"
import { InfoItemProps } from "../infoItem/infoItem"
import {ReactComponent as CompanyIcon} from "./icon-company.svg"
import {ReactComponent as LocationIcon} from "./icon-location.svg"
import {ReactComponent as TwitterIcon} from "./icon-twitter.svg"
import {ReactComponent as BlogIcon} from "./icon-website.svg"
import { InfoItem } from "../infoItem/infoItem"
interface UserInfoProps extends Pick<LocalGithubUser, "blog" | "company" | "location" | "twitter">{

}
export const UserInfo =({blog, company, location, twitter}: UserInfoProps) => {
  const items: InfoItemProps[]=[{
    icon: <LocationIcon />,
    text: location
  },
{
    icon: <BlogIcon />,
    text: blog,
    isLink: true
},
{
    icon: <TwitterIcon />,
    text: twitter
},
{
    icon: <CompanyIcon />,
text: company
}
]
   return ( <div className="userInfo">
     
       {items.map((item, index)=> (
        <InfoItem {...item} key={index} />
       ))}
    </div>
   )
}