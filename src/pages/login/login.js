import React from "react";
import styles from './login.module.css'
import { Paper, TextField } from "@mui/material";

const campos = [
    { "key": "email", "label": "Email", "valueType": "email" },
    { "key": "senha", "label": "Senha", "valueType": "password" }
]

function LogIn() {
    return (
        <div className={styles.login}>
            <div className={styles.FisrtCard}></div>

            <Paper className={styles.card}>
                <h1>Login</h1>
                <div className={styles.inputs}>
                    {
                        campos.map((campos) => {
                            return (
                                <div className={styles.inputContainer} >
                                    <TextField
                                        label={campos.label}
                                        variant="standard"
                                        type={campos.valueType}
                                        className={styles.input}
                                    />
                                </div>
                            )
                        })
                    }
                    <>
                        <div className={styles.buttonContainer} >
                            <button className={styles.button} style={{ background: '#3B9AB1' }}>
                                <span style={{ color: 'white' }} >Entrar</span>
                            </button>
                        </div>
                        <div className={styles.footer} >
                            <a className={styles.forgotPass} >Esqueci senha</a>
                        </div>
                    </>
                </div>
            </Paper>
        </div>
    )
}

export default LogIn;