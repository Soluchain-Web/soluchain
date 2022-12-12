import {Routes, Route} from 'react-router-dom'

import { Dashboard } from './pages/Dashboard'
import { NftRegister } from './pages/NftRegister'
import { Login } from './pages/Login'
import { UserHome } from './pages/UserHome'
import { UserInvest } from './pages/UserInvest'
import { NftDetails } from './pages/NftDetails'
import { UserProfile } from './pages/UserProfile'
import { Help } from './pages/Help'
import { Index } from './pages'

export function Router(){
    return(
        <Routes>
            <Route path='/' element={<Index/>}/>
            <Route path='/Home' element={<UserHome/>}/>
            <Route path='/Help' element={<Help/>}/>
            <Route path='/Dashboard' element={<Dashboard/>}/>
            <Route path='/NFT/:id' element={<NftDetails/>}/>
            <Route path='/User/Profile' element={<UserProfile/>}/>
            <Route path='/NFT/Register' element={<NftRegister/>}/>
            <Route path='/NFT/List' element={<UserInvest/>}/>
        </Routes>
    )
}