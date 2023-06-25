

import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container } from './components/component/component';
import { ThemeSwitcher } from './components/themeSwitcher/themeSwitcher';
import { Header } from './components/header/header';
import { Search } from './components/search/search';
import { UserCard } from './userCard/userCard';
import { defaultUser } from './components/mock';
import { useState } from 'react';
import { GithubError, GithubUser, LocalGithubUser } from './components/types';

import { isGuardUser } from './utils/typeguards';
import { extractLocalUser } from './utils/extract-local-user';
const  BASE_URL=`https://api.github.com/users/`
function App() {
 const [user, setUser]= useState<LocalGithubUser | null>(defaultUser)
 const fetchUser=async (username: string)=> {
const url =BASE_URL+username;
const res = await fetch(url)
const user= await res.json() as GithubUser | GithubError
if(isGuardUser(user)){
setUser(extractLocalUser(user))
} else {
  setUser(null)
}

 }
   return (
    <Container>
<Header />
<Search hasError={!user} onSubmit={fetchUser} />
{user && (
<UserCard 
{...user}
/>

)}
    </Container>
  );
}

export default App;
/*
cd project
npm start
*/
//https://api.github.com/users/michey85