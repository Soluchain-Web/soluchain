import {Routes, Route} from 'react-router-dom'

import { Dashboard } from './pages/Dashboard'
import { RegisterNFT } from './pages/RegisterNFT'
import { Login } from './pages/Login'

export function Router(){
    return(
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/Dashboard' element={<Dashboard/>}/>
            <Route path='/NFT/Register' element={<RegisterNFT/>}/>
        </Routes>
    )
}