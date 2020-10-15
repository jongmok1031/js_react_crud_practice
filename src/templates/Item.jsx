import React from 'react';
import { ItemMenu } from '../components/Menu';

const Item = ({children}) => <>
<h1>Item 페이지</h1>
<ItemMenu></ItemMenu>
{children}
</>
export default Item


