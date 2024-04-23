import React from 'react'
import { Box } from '@mui/material'
import logo from "../../assets/logo.png"
import styles from "./Logo.module.css"

function Logo() {
  return (
    <Box component="img" src={logo} alt="qtify-logo" className={styles.logo}>
    </Box>
  )
}

export default Logo