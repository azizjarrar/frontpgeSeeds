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

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(username, matricule, email, roles) {
  return { username, matricule, email, roles };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24),
  createData('Ice cream sandwich', 237, 9.0, 37),
  createData('Eclair', 262, 16.0, 24),
  createData('Cupcake', 305, 3.7, 67),
  createData('Gingerbread', 356, 16.0, 49),
  createData('Cupcake', 305, 3.7, 67),
  createData('Gingerbread', 356, 16.0, 49),
  createData('Cupcake', 305, 3.7, 67),
  createData('Gingerbread', 356, 16.0, 49),
  createData('Cupcake', 305, 3.7, 67),
  createData('Gingerbread', 356, 16.0, 49),
  createData('Gingerbread', 356, 16.0, 49),
  createData('Gingerbread', 356, 16.0, 49),
  createData('Gingerbread', 356, 16.0, 49),
  createData('Gingerbread', 356, 16.0, 49),
  createData('Gingerbread', 356, 16.0, 49),
  createData('Gingerbread', 356, 16.0, 49),

  createData('Cupcake', 305, 3.7, 67),
  createData('Gingerbread', 356, 16.0, 49),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49),
  createData('Cupcake', 305, 3.7, 67),
  createData('Gingerbread', 356, 16.0, 49),
  createData('Cupcake', 305, 3.7, 67),
  createData('Gingerbread', 356, 16.0, 49),
  createData('aziz', 356, 16.0, 49),

];

 const  VisitesList =()=> {
  const classes = useStyles();



  return(<div className={style.TableContainer}>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">username</TableCell>
            <TableCell align="left">matricule</TableCell>
            <TableCell align="left">email</TableCell>
            <TableCell align="left">roles</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>

              <TableCell align="left">{row.username}</TableCell>
              <TableCell align="left">{row.matricule}</TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">{row.roles}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>)

}

export default VisitesList





