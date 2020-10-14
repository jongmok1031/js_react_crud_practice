import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => <>
<nav>
    <ol>
        네비게이션 링크들
        <li><Link to ='/'> Home </Link></li>
        <li><Link to ='/board'> Board </Link></li>
        <li><Link to ='/user'> User </Link></li>
        <li><Link to ='/item'> Item </Link></li>
    </ol>
</nav>

</>

export default Nav