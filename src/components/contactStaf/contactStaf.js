import React from 'react'
import style from './contactStaf.module.scss'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {getcontactStaff} from '../../services/contact.service'
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
const ContactStaf = () => {
    const [data,setData]=React.useState([])

      const classes = useStyles();
    React.useEffect(()=>{
        if(localStorage.getItem("role")=="ROLE_USER"){
            getcontactStaff().then(res=>{
                setData(res.data.filter(e=>{
                    console.log(e)
                    return e.emetteur==localStorage.getItem("userName")
                }))
            })
        }else if(localStorage.getItem("role")=="ROLE_CHERCHEUR"){
            getcontactStaff().then(res=>{
                setData(res.data.filter(e=>{
                    return e.recepteur=="Chercheur"
                }))
            })
        }else if(localStorage.getItem("role")=="ROLE_ADMINMET"){
            getcontactStaff().then(res=>{
                setData(res.data.filter(e=>{
                    return e.recepteur=="adminmet"
                }))
            })
        }
        
        else{
            getcontactStaff().then(res=>{
                setData(res.data)
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
            <TableCell align="left">recepteur</TableCell>
            {localStorage.getItem("role")!="ROLE_ADMIN"  && localStorage.getItem("role")!="ROLE_USER" &&<TableCell align="left">répondre</TableCell>}

          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.name}>

              <TableCell align="left">{row.id}</TableCell>
              <TableCell align="left">{row.emetteur}</TableCell>
              <TableCell align="left">{row.message}</TableCell>
              <TableCell align="left">{row.recepteur}</TableCell>
              {localStorage.getItem("role")!="ROLE_ADMIN"&& localStorage.getItem("role")!="ROLE_USER"&& <TableCell align="left"><Link to={"/Contact/User/"+row.emetteur+"/"+row.recepteur}><button>répondre</button></Link></TableCell>}

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>   
        </div>
    )
}

export default ContactStaf
