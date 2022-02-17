import React, {useRef} from 'react';

import { Button } from 'primereact/button';



import { Panel } from 'primereact/panel';



import { InputText } from 'primereact/inputtext';

import { Password } from 'primereact/password';



export const PanelDemo = () => {

    return (
        <div className="grid">
            <div className="col-12">
                <div className="card">
                    <h5>Divider</h5>
                    <div className="grid">
                        <div className="col-12 flex align-items-center justify-content-center">
                            <div className="p-fluid">
                                <div className="field">
                                    <span className="p-float-label">
                                        <InputText id="username" type="text" />
                                        <label htmlFor="username">Username</label>
                                    </span>
                                </div>
                                <div className="field">
                                    <span className="p-float-label">
                                        <Password id="password" type="password" />
                                        <label htmlFor="password">Password</label>
                                    </span>
                                </div>
                                <Button label="Login"></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
