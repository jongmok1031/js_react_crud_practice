import React from 'react';
import { ItemMenu } from '../components/Menu';
import './table.style.css'
const Item = ({children}) => <>
<h1>Item 페이지</h1>
<ItemMenu></ItemMenu>
{children}
</>
export default Item


