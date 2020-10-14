import React, {useState} from 'react';
import axios from 'axios'


const UserLogin = () => {
    const [userid, setUserid] = useState()    
    const [userpw, setUserpw] = useState()     
    const login = e => { 
        e.preventDefault() 
        alert(`로그인아이디 : ${userid}, 비번 : ${userpw}`)
        //비동기 방식으로 플라스크에 보내기
        //post방식은 외부에서 볼수있게 편지로 봉함   get은 걍 읽으면서 가도되는 엽서  //보내고, 성공할경우, 실패할경우
        axios.post(``,{userid,userpw})// a:a 는 a로 생략가능
            .then(res => {
                alert('통신 성공')
            })
            .catch(error => {
                alert('Fail 통신실패')
            }) 


    }
        
    const cancel = e => {
        e.preventDefault() 
        alert('캔슬 버튼 클릭됨')
    }
    

return (<>
<h1>로그인창</h1>
<table>
    <tr>
        <td>ID</td> 
        <td><input type="text" onChange={e => setUserid(`${e.target.value}`)}/></td>
    </tr>
    <tr>
        <td>PASSWORD</td>
        <td><input type="text" onChange={e => setUserpw(`${e.target.value}`)}/></td>
    </tr>
    <tr>
        <td colSpan>
            <input type="button" value="Login" onClick= {login}/>    
            <input type="button" value="Cancel" onClick= {cancel}/>    
        </td>
    </tr>
</table>
</>)}

export default UserLogin