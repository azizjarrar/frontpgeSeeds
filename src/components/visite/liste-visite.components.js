import React from "react";
import style from './listeVsite.module.scss'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import UpdateVisite from './updateVisite'
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(Date, Description, Etat) {
  return { Date, Description, Etat };
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

const VisitesList =()=> {
  const [modal,setModal]=React.useState(false)
  const classes = useStyles();
    const openModalUpdate=()=>{
      setModal(e=>!e)
    }



  return(<div className={style.TableContainer}>
          {modal&&<div className={style.Modal}>
          <div className={style.close} onClick={()=>setModal(e=>!e)}></div>

          <UpdateVisite />
        </div>}
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="left">Etat</TableCell>
            <TableCell align="left">Update</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>

              <TableCell align="left">{row.Date}</TableCell>
              <TableCell align="left">{row.Description}</TableCell>
              <TableCell align="left">{row.Etat}</TableCell>
              <TableCell align="left"><button className={style.update} onClick={()=>openModalUpdate()}>Update</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>)

}
/**
 *               <select className={style.selectcss}>
                      <option>en attendant</option>
                      <option>acceepte </option>
                      <option>refuse</option>
                    </select>
 */
export default VisitesList

















