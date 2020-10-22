import React from 'react'
import { UserMenu } from '../components/Menu'
import './table.style.css'
const User = ({children}) => (<>
<h1>User</h1>
<UserMenu></UserMenu>
{children}
</>)
export default User

