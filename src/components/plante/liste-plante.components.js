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
import {getplantes,deletePlante} from '../../services/plante-service'
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});



 const  ListePlanet =()=> {
  const [modal,setModal]=React.useState(false)
  const [data,setData]=React.useState([])
  const [modalData,setModalData]=React.useState({})

  const classes = useStyles();
    const openModalUpdate=(updateData)=>{
      setModalData(updateData)
      setModal(e=>!e)
    }
    React.useEffect(()=>{
      getplantes().then(res=>{
        setData(res.data)
      })
    },[])

    const DelteData=(id)=>{
      deletePlante(id).then(data=>{
        getplantes().then(res=>{
          setData(res.data)
        })
      })
    }
  return(<div className={style.TableContainer}>
        {modal&&<div className={style.Modal}>
        <div className={style.close} onClick={()=>setModal(e=>!e)}></div>

          <UpdatePlante {...modalData}/>
        </div>}
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell align="left">id</TableCell>
            <TableCell align="left">nomPlante</TableCell>
            <TableCell align="left">description</TableCell>
            <TableCell align="left">image</TableCell>
            <TableCell align="left">type</TableCell>
            <TableCell align="left">Update</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="left">{row.id}</TableCell>
              <TableCell align="left">{row.nomPlante}</TableCell>
              <TableCell align="left">{row.description}</TableCell>
              <TableCell align="left"><div className={style.imageDesign}><img src={row.image}/></div></TableCell>
              <TableCell align="left">{row.type}</TableCell>
              <TableCell align="left"><button className={style.update} onClick={()=>openModalUpdate({id:row.id,nomPlante:row.nomPlante,description:row.description,image:row.image,type:row.type})}>Update</button></TableCell>
              <TableCell align="left"><button className={style.delte} style={{backgroundColor:"#dc3545"}} onClick={()=>DelteData(row.id)} >Delete</button></TableCell>


            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>)

}

export default ListePlanet












