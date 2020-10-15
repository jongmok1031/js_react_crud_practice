import React from 'react'
import {Link} from 'react-router-dom'

export const UserMenu = () => (<nav>
    <ol>
        user메뉴 링크입니다
        <li><Link to = '/login-user'>UserLogin page</Link></li> 
        <li><Link to = '/register-user'>UserRead page</Link></li> 
        <li><Link to = '/update-user'>UserUpdate page</Link></li> 
        <li><Link to = '/delete-user'>UserRemove page</Link></li> 
    </ol>
</nav>)

export const BoardMenu = () => (<nav>
<ol> 보드메뉴 링크들
    <li><Link to = '/create-board'>BoardCreate page</Link></li> 
    <li><Link to = '/read-board'>BoardRead page</Link></li> 
    <li><Link to = '/update-board'>BoardUpdate page</Link></li> 
    <li><Link to = '/delete-board'>Boarddelete page</Link></li> 
</ol>
</nav>)



export const ItemMenu = () => (<nav>
    <ol>
        아이템메뉴 링크입니다
        <li><Link to = '/item/create'>ItemCreate page</Link></li> 
        <li><Link to = '/item/read'>ItemRead page</Link></li> 
        <li><Link to = '/item/update'>ItemUpdate page</Link></li> 
        <li><Link to = '/item/delete'>Itemdelete page</Link></li> 
    </ol>
</nav>)

    
        
