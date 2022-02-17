import React, {useRef,useState,SyntheticEvent} from 'react';
import {Redirect} from "react-router-dom";
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';

import classNames from 'classnames';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';

import { FileUpload } from 'primereact/fileupload';
import { Rating } from 'primereact/rating';
import { Toolbar } from 'primereact/toolbar';
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton } from 'primereact/radiobutton';
import { InputNumber } from 'primereact/inputnumber';
import { Dialog } from 'primereact/dialog';

import { ProductService } from '../service/ProductService';

export default function Login() {
    const[user,setUser]=useState('');
    const[password,setPassword]=useState(''); 
    const [redirect, setRedirect] = useState(false);
    const submit=async(e)=>{
        e.preventDefault();
         await fetch('http://localhost:8000/api/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                user, 
                password
            })
        });

        setRedirect(true);
    } 
    if (redirect) {
       return (<Redirect to='./home' />);
     }
    return (
     <div className='padre-div'>
         <div className='hijo-div'>
                <form onSubmit={submit}>
                        <div className="col-12  align-items-center justify-content-center">
                            <div className="p-fluid">
                                <div className="field">
                                    <span className="p-float-label">
                                        <InputText id="username" type="text"  onChange={e=>setUser(e.target.value)}/>
                                        <label htmlFor="username">Usuario</label>
                                     </span>
                                </div>
                                <div className="field">
                                    <span className="p-float-label">
                                        <Password id="password" type="password" onChange={e=>setPassword(e.target.value)}/>
                                        <label htmlFor="password">Contraseña</label>
                                    </span>
                                </div>
                                <Button label="Inicio" type="submit"></Button>
                            </div>
                        </div>
                </form>        
         </div>
     </div>
                                    
    )
  }
