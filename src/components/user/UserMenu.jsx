import React from 'react'
import {Link} from 'react-router-dom'

const UserMenu = () => 
<>User 네비
<nav>
    <ol>
        user 링크입니다
        <li><Link to = '/user/login'>UserLogin</Link></li> 
        <li><Link to = '/user/register'>UserRead</Link></li> 
        <li><Link to = '/user/update'>UserUpdate</Link></li> 
        <li><Link to = '/user/remove'>UserRemove</Link></li> 
    </ol>
</nav></>
export default UserMenu