import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    card: {
      width: '326px',
      border: '0.5px solid #d3d3d3',
      borderRadius: '8px',
      height: '398px',
      padding: '15px'
    },
    textWhite: {
      color: 'whitesmoke',
    },
    textGrey:{
      color: '#8c8c8c'
    },
    bgvert: {
      backgroundColor: '#0c806b',
    },
    bgwhite: {
      backgroundColor: '#ffffff',
    },
    btn:{
      marginTop: '8px',
      textTransform: 'unset',
      fontSize:'1.2rem',
      fontWeight:'bold',
      borderRadius:'8px',
      '&:active': {
        color:'unset'
      }
    },
    btnSalmon: {
      backgroundColor: '#fc5c63',
      color: 'white',
      '&:hover': {
        backgroundColor: 'rgb(252, 80, 87)',
        boxShadow: 'rgb(0 0 0 / 25%) 0px 2px 10px',
      },
      '&:active': {
        color:'white'
      },
    },
    btnBlack: {
      backgroundColor: '#050505',
      color: 'white',
      '&:hover': {
        backgroundColor: 'rgb(31, 31, 31)',
        boxShadow: 'rgb(0 0 0 / 25%) 0px 2px 10px',
      },
      '&:active': {
        color:'white'
      },
    },
    btnClear: {
      width: '96px',
      display: 'flex',
      marginLeft: 'auto'
    },
    btnValid: {
      width:'121px'
    },
    fullWidth:{
      width:'100%'
    },
    scrollDiv:{
      height: '293px',
      overflow:'hidden',
      overflowY:'scroll' 
    },
    scrollObject:{
      fontSize:'1.125rem',
      fontWeight: '400',
      lineHeight:'24px',
      padding: '15px'
    }
  })

  export { useStyles };