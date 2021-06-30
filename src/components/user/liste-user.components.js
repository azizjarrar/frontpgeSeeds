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
import {getUsers,updateUser} from '../../services/user.service'
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});




 const  VisitesListUser =()=> {
  const classes = useStyles();
  const [users,setUser]=React.useState([])
  React.useEffect(()=>{
    getUsers().then(data=>{
      console.log(data.data)
      setUser(data.data)
      
    })
  },[])

  const selectChangeHandler=(id,updateuserData)=>{

    updateUser({...updateuserData.updateuserData,roles:id},updateuserData.updateuserData.id).then(data=>{
      alert("la mise a jour a ete effectuée")
    })
  }
  return(<div className={style.TableContainer}>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">id</TableCell>
            <TableCell align="left">Nom d'utilisateur</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Role</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="left">{row.id}</TableCell>
              <TableCell align="left">{row.username}</TableCell>
              <TableCell align="left">{row.email}</TableCell>

              <TableCell align="left">
              <select value={row.roles[0].id} onChange={(e)=>{selectChangeHandler([{id:e.target.value,name:e.id}],{updateuserData:{password:row.password,id:row.id,username:row.username,email:row.email}})}} className={style.selectcss}>
              <option value="select" >select</option>
                <option id="user" value="1">user</option>
                <option id="admin" value="2">admin</option>

                <option id="Chercheur" value="3">Chercheur</option>
                <option id="AdminMet" value="4">AdminMet</option>

   
            </select>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>)

}

export default VisitesListUser





