import React from 'react'
import { useNavigate } from 'react-router-dom'
import {Button} from '@mui/material'
import './global.css'

const PageNotFound = () => {
    const navigate = useNavigate ()
    const handleButtonClick = () => {
        navigate("/HomePage")
    }
    return(
    <>
    <div id='center'>
    <div>404 PageNotFound</div>
    <Button variant='contained' onClick={() => handleButtonClick()}>Go to home page</Button>
    </div>
    </>
    )
    
}

export default PageNotFound