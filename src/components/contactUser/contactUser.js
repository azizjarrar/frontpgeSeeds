import React from 'react'
import style from './contactUser.module.scss'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {getcontactUser} from '../../services/contact.service'
const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
const ContactUser = () => {
    const [data,setData]=React.useState([])

      const classes = useStyles();
    React.useEffect(()=>{
        if(localStorage.getItem("role")=="ROLE_ADMIN"){
            getcontactUser().then(res=>{
                setData(res.data)
            })
          
        }else if (localStorage.getItem("role")=="ROLE_CHERCHEUR" || localStorage.getItem("role")=="ROLE_ADMINMET"){
            getcontactUser().then(res=>{
                setData(res.data.filter(e=>{
                    console.log(e.emetteur+"=="+localStorage.getItem("userName"))
                    return e.emetteur==localStorage.getItem("userName")
                }))            })

        }else{
            
            getcontactUser().then(res=>{
                setData(res.data.filter(e=>{
                    console.log(e.user+"=="+localStorage.getItem("userName"))
                    return e.user==localStorage.getItem("userName")
                }))
            })
        }

    },[])

    return (
        <div className={style.TableContainer}>      
            <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">id</TableCell>
            <TableCell align="left">emetteur</TableCell>
            <TableCell align="left">message</TableCell>
            <TableCell align="left">username</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.name}>

              <TableCell align="left">{row.id}</TableCell>
              <TableCell align="left">{row.emetteur}</TableCell>
              <TableCell align="left">{row.message}</TableCell>
              <TableCell align="left">{row.user}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>      
        </div>
    )
}

export default ContactUser
