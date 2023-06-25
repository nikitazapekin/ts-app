import { ReactNode } from "react"

import "./infoItem.css"
export interface InfoItemProps {
icon: React.ReactNode,
text?: string | null,
isLink?: boolean 
}
export const InfoItem =({icon, isLink, text}: InfoItemProps) => {
    const currentText= text || "Not available"
    let currentHref=''
if(isLink){
    currentHref=text && text.startsWith('http') ? text : `https://${text}`

}
   return ( <div className="infoItem">
       {icon}
       <div>
        {isLink && text ? (
            <a href={currentHref}
            target="_blank"
            rel="norefferer"
            className="link"
            ></a>
        ) : currentText }
       </div>
    </div>
   )
}