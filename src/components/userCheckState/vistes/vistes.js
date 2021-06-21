import React from 'react'
import style from './vistes.module.scss'
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

const Vistes = () => {
    const classes = useStyles();
    return (
        <div className={style.container}>
               <div className={style.header}>
                   <h1>Vistes</h1>
               </div>
               <div className={style.formContainer}>
                    <form>
                        <div className="form-group">
                            <label> Date: </label>
                            <input placeholder="Date" type="date" name="date" className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label> Description: </label>
                            <textarea rows="6"  placeholder="Description" name="description" className="form-control"
                                />
                        </div>
                        <button className="btn btn-primary btn-block" >Save</button>
                </form>
                </div>
                <div className={style.header}>
                   <h1>liste de vous Visites</h1>
               </div>
               <div className={style.table}>
               <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell align="left">Date</TableCell>
                            <TableCell align="left">Description</TableCell>
                            <TableCell align="left">Etat</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>

                            <TableCell align="left">{row.Date}</TableCell>
                            <TableCell align="left">{row.Description}</TableCell>
                            <TableCell align="left">{row.Etat}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                    </TableContainer>
                </div>
        </div>
       
    )
}

export default Vistes
