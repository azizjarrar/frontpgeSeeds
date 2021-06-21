import React from "react";
import style from './listPlantes.module.scss'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import UpdatePlante from './updatePlante'
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(nomPlante, description, imageUrl,type) {
  return { nomPlante, description, imageUrl,type };
}

const rows = [
  createData('Frozen yoghurt', 159,"https://images.theconversation.com/files/307156/original/file-20191216-124022-r2addy.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop", 6.0),
  createData('Ice cream sandwich', 237,"https://images.theconversation.com/files/307156/original/file-20191216-124022-r2addy.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop", 9.0),
  createData('Eclair', 262,"https://images.theconversation.com/files/307156/original/file-20191216-124022-r2addy.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop", 16.0),


];

 const  ListePlanet =()=> {
  const [modal,setModal]=React.useState(false)
  const classes = useStyles();
    const openModalUpdate=()=>{
      setModal(e=>!e)
    }



  return(<div className={style.TableContainer}>
        {modal&&<div className={style.Modal}>
        <div className={style.close} onClick={()=>setModal(e=>!e)}></div>

          <UpdatePlante />
        </div>}
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">nomPlante</TableCell>
            <TableCell align="left">description</TableCell>
            <TableCell align="left">image</TableCell>
            <TableCell align="left">type</TableCell>
            <TableCell align="left">Update</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>

              <TableCell align="left">{row.nomPlante}</TableCell>
              <TableCell align="left">{row.description}</TableCell>
              <TableCell align="left"><div className={style.imageDesign}><img src={row.imageUrl}/></div></TableCell>
              <TableCell align="left">{row.type}</TableCell>
              <TableCell align="left"><button className={style.update} onClick={()=>openModalUpdate()}>Update</button></TableCell>


            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>)

}

export default ListePlanet












