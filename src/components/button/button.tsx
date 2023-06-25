/*import { ReactNode, useEffect } from "react"
import { useState } from "react"
import "./button.css"
interface ButtonProps {
children: string, 
onClick?: React.MouseEventHandler<HTMLDivElement> 
}
export const Button =({children, onClick}: ButtonProps) =>{
   
   return  (
    <div className="button" onClick={onClick} >
{children}
    </div>
) 
     } */

   //  import styles from './Button.module.scss';
   import "./button.css"
interface ButtonProps {
  children: string,
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
}

export const Button = ({ children, onClick }: ButtonProps) => (
  <button className="button" onClick={onClick}>
    {children}
  </button>
);
