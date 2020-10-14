import React from 'react'
import {Link} from 'react-router-dom'

const BoardMenu = () => 
<>Board 네비
<nav>
<ol> 보드 링크들
    <li><Link to = '/board/create'>BoardCreate</Link></li> 
    <li><Link to = '/board/read'>BoardRead</Link></li> 
    <li><Link to = '/board/update'>BoardUpdate</Link></li> 
    <li><Link to = '/board/remove'>BoardRemove</Link></li> 
</ol>
</nav></>

export default BoardMenu