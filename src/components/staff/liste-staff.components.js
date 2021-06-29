import React from "react";
import style from './listestaffe.module.scss'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {getStaffs,deleteStaf} from '../../services/staff-service'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

 const  VisitesList =()=> {
  const classes = useStyles();
  const [data,setData]=React.useState([])

  React.useEffect(()=>{
    getStaffs().then(data=>{
      setData(data.data)
    })
  },[])
  const DelteData=(id)=>{
    deleteStaf(id).then(data=>{
      getStaffs().then(data=>{
        setData(data.data)
      })
    })
  }

  return(<div className={style.TableContainer}>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell align="left">id</TableCell>

            <TableCell align="left">username</TableCell>
            <TableCell align="left">matricule</TableCell>
            <TableCell align="left">email</TableCell>
            <TableCell align="left">roles</TableCell>
            <TableCell align="left">Delete</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="left">{row.id}</TableCell>
              <TableCell align="left">{row.username}</TableCell>
              <TableCell align="left">{row.matricule}</TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">{row.role}</TableCell>
              <TableCell align="left"><button className={style.delte} style={{backgroundColor:"#dc3545"}} onClick={()=>DelteData(row.id)} >Delete</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>)

}

export default VisitesList





