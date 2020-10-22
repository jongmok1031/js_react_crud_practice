import React, {useState} from 'react';
import axios from 'axios'
import {User} from '../../templates'

const UserRegister = () => {
    const [ID, setID] = useState('')
    const [name, setName] = useState('')
    const [pw, setPw] = useState('')

    const signup = e =>{
        e.preventDefault()
        const userData = {
            ID, name, pw 
            // 'ID': ID,
            // 'name' : name,
            // 'pw' : pw   
            
        }
        axios.post('http:localhost:8080/user/register', userData) //여기서 post대신 get도 가능
        .then(
            console.log('signup success')
        )
        .error(
            console.log('signup fail')
        )
    }

    return (<User>
        <h1>UserRegister</h1>
        <table classname='tab_layer'>
            <form>
                <tr>
                    <td>ID</td>
                    <td><input type = 'text' onChange = {e => setID(e.target.value)}></input></td>
                </tr>    
                <tr>
                    <td>name</td>
                    <td><input type = 'text' onChange = {e => setName(e.target.value)}></input></td>
                </tr>    
                <tr>
                    <td>pw</td>
                    <td><input type = 'text' onChange = {e => setPw(e.target.value)}></input></td>
                </tr>    
                <tr>
                    <td><button onClick = {signup}>확인</button></td>
                    <td><button>취소</button></td>
                </tr>    
                <tr>
                    <td></td>
                    <td></td>
                </tr>    
                <tr>
                    <td></td>
                    <td></td>
                </tr>    
                <tr>
                    <td></td>
                    <td></td>
                </tr>    
                <tr>
                    <td></td>
                    <td></td>
                </tr>    
                <tr>
                    <td></td>
                    <td></td>
                </tr>    
                <tr>
                    <td></td>
                    <td></td>
                </tr>    
            </form>
        </table>   
    </User>)
}

export default UserRegister