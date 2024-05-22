import React from 'react'
import { Box } from '@mui/material'
import logoImg from "../../assets/logo.png"
import styles from "./Logo.module.css"

function Logo() {
  return (
    <Box component="img" src={logoImg} alt="qtify-logo" className={styles.logo}>
    </Box>
  )
}

export default React.memo(Logo);