import React from "react";
import style from './listeuser.module.scss'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {getUsers} from '../../services/user.service'
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(id,username, email) {
  return { id,username, email };
}



 const  VisitesListUser =()=> {
  const classes = useStyles();
  const [users,setUser]=React.useState([])
  React.useEffect(()=>{
    getUsers().then(data=>{
      setUser(data.data)
      
    })
  },[])


  return(<div className={style.TableContainer}>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">id</TableCell>
            <TableCell align="left">username</TableCell>
            <TableCell align="left">Email</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="left">{row.id}</TableCell>
              <TableCell align="left">{row.username}</TableCell>
              <TableCell align="left">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>)

}

export default VisitesListUser





