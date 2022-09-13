import React, {useState } from "react";
import './button.css'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import {TextField } from "@mui/material";
import { useFormik } from 'formik';
import * as yup from 'yup';

function Button() {
  const [openState, setOpenSate] = useState(false)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [thanks, setThanks] = useState(false)

  const handleClose = () =>{
    setOpenSate(false)
  }

  const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),

  });
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: validationSchema ,
    onSubmit: values => {
      console.log(values)
      setEmail(values)
    },
  });

  return (
    <div className={'button-container'}>
      <button className={'button-subscribe hvr-bounce-in hvr-back-pulse'}
              onClick={() => {
                setOpenSate(true);
                setThanks(false);
              }}>Inscreva-se!</button>
      <Modal
        open={openState}
        onClose={handleClose}
        aria-labelledby="formulário"
        aria-describedby="formulario para receber notificações sobre o lançamento do produto"
      >
        <Box className={"modal"} >
          { !thanks &&
          <div className={"inputs-container"}>
            <label className={"email-label"}>
              Email:
              <TextField
                className={"email"}
                size="small"
                variant="outlined"
                label="Email"
                id="email"
                name="email"
                type="email"
                inputProps={{style: {textTransform: 'lowercase'}}}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                InputLabelProps={{
                  shrink: true,
                }}

              />
            </label>
            <label className={"nome-label"}>
              Nome:
              <TextField
                className={"nome"}
                size="small"
                variant="outlined"
                label="Nome"
                id="nome"
                name="nome"
                type="text"
                onChange={e => {setName(e.target.value)}}
                inputProps={{style: {textTransform: 'capitalize'}}}
              />
            </label>
            <button disabled={Boolean(formik.errors.email)} className={"pronto hvr-bounce-in hvr-back-pulse"}
                    onClick={()=>setThanks(true)}>Pronto!</button>
          </div>}
          {thanks && <div className={"inputs-container thanks bounce"}>Thanks!</div>
          }
        </Box>
      </Modal>
    </div>
  );
}

export default Button;