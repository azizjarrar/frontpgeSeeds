import React from 'react'
import style from './intervenetion.module.scss'
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

function createData(id, description) {
  return {  id, description  };
}

const rows = [
  createData('Frozen yoghurt', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, whe"),
  createData('Ice cream sandwich', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, wheLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, whe"),
  createData('Eclair', " Ipsum is simply dummy text of the printing and typesetting industry. Lorem "),


];

const Intervenetion = () => {
    const classes = useStyles();

    return (
        <div className={style.container}>
               <div className={style.header}>
                   <h1>intervention</h1>
               </div>
               <div className={style.formContainer}>
               <form>

                        <div className="form-group">
                            <label> Description: </label>
                            <textarea rows="6"  placeholder="Description" name="description" className="form-control"
                                />
                        </div>
                        <button className="btn btn-primary btn-block" >Save</button>
                </form>
                </div>
                <div className={style.header}>
                   <h1>liste de vous intervention</h1>
               </div>
               <div className={style.table}>
               <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell align="left">id</TableCell>
                            <TableCell align="left">description</TableCell>

                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>

                            <TableCell align="left">{row.id}</TableCell>
                            <TableCell align="left">{row.description}</TableCell>

                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                    </TableContainer>
            </div>
        </div>
    )
}

export default Intervenetion
