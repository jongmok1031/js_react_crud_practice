import React from 'react'
import {Link} from 'react-router-dom'

const ItemMenu = () => 
<>Item 네비
<nav>
    <ol>
        아이템 링크입니다
        <li><Link to = '/item/create'>ItemCreate</Link></li> 
        <li><Link to = '/item/read'>ItemRead</Link></li> 
        <li><Link to = '/item/update'>ItemUpdate</Link></li> 
        <li><Link to = '/item/remove'>ItemRemove</Link></li> 
    </ol>
</nav></>


export default ItemMenu