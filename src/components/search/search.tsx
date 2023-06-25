/*import { ReactNode, useEffect } from "react"
import { useState } from "react"
import {ReactComponent as SearchIcon} from "./icon-search.svg"
import { useRef } from "react"
import "./search.css"
import { Button } from "../button/button"
interface SearchProps {
hasError: boolean,
onSubmit: (text: string)=> void
}
export const Search =({hasError, onSubmit}: SearchProps) =>{
   const searchRef=useRef<HTMLInputElement | null>(null)
  // const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    const handleSubmit=(event: React.FormEvent)=> {

    event.preventDefault() //используем чтобы браузер не обновлял страницу
   const text=searchRef.current ? searchRef.current.value : '' //Если значение searchRef.current равно null или undefined, то вернется пустая строка
   console.log(text)
   if(text) {
    onSubmit(text)
    console.log(text)
    if( searchRef.current){
    searchRef.current.value=''
    }
   }

//    }
   }
   return  (
    <form onSubmit={handleSubmit}  autoComplete="off" >
<div className="search">
<label htmlFor="search" className="label">
<SearchIcon />
</label>
<input
 ref={searchRef}
type="text"
className="textField"
id="search"
name="username"
placeholder="search user"
/>
{hasError && (
    <div className="error">No result</div>
)}
<Button>Search</Button>
</div>
Search component
    </form>
) 
     } 
     */


   //  import { ReactComponent as SearchIcon } from 'assets/icon-search.svg';
   import {ReactComponent as SearchIcon} from "./icon-search.svg"
//import { Button } from 'components/Button';
import { Button } from '../button/button';
//import styles from './search.css';
import "./search.css"
interface SearchProps {
  hasError: boolean,
  onSubmit: (text: string) => void,
}

type FormFields = {
  username: HTMLInputElement,
}

export const Search = ({ hasError, onSubmit }: SearchProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement & FormFields>) => {
    event.preventDefault();
    const text = event.currentTarget.username.value;

    if (text.trim()) {
      onSubmit(text);
      event.currentTarget.reset();
    }
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className="search">
        <label htmlFor="search" className="label">
          <SearchIcon />
        </label>
        <input
          type="text"
          className="textField"
          id="search"
          name="username"
          placeholder="Search GitHub username..."
        />
        {hasError && (
          <div className="error">
            No result
          </div>
        )}
        <Button>Search</Button>
      </div>
    </form>
  );
        }