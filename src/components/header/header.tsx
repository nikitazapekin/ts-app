import { ReactNode } from "react"
//import "./header.scss"
//import "./C:\Users\LENOVO\Desktop\react-typescript\testt\src\components\header\header.scss"
//import "./header/header.scss"
import "./header.css"
import { ThemeSwitcher } from "../themeSwitcher/themeSwitcher"
interface HeaderProps {
children: ReactNode, 
}
export const Header =() => (
    <div className="header">
        <div className="headerLogo">
        devfinder
        </div>
<ThemeSwitcher />
    </div>
) 