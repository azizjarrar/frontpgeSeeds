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
import {getvisites,deletevisites} from '../../services/visite-service'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});




const VisitesList =()=> {
  const [modal,setModal]=React.useState(false)
  const [data,setData]=React.useState([])
  const [modalData,setModalData]=React.useState({})

  const classes = useStyles();
    const openModalUpdate=(dataUpdate)=>{
      setModalData(dataUpdate)

      setModal(e=>!e)
    }

    React.useEffect(()=>{
      getvisites().then(data=>{
        setData(data.data)
      })
    },[])

    const DelteData=(id)=>{
      deletevisites(id).then(data=>{
        getvisites().then(data=>{
          setData(data.data)
        })
      })
    }

  return(<div className={style.TableContainer}>
          {modal&&<div className={style.Modal}>
          <div className={style.close} onClick={()=>setModal(e=>!e)}></div>

          <UpdateVisite  {...modalData}/>
        </div>}
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">id</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="left">Etat</TableCell>
            <TableCell align="left">user id</TableCell>

            <TableCell align="left">Update</TableCell>
            <TableCell align="left">delete</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="left">{row.id}</TableCell>
              <TableCell align="left">{row.date.slice(0,10)}</TableCell>
              <TableCell align="left">{row.description}</TableCell>
              <TableCell align="left">{row.etat}</TableCell>
              <TableCell align="left">{row.user}</TableCell>

              <TableCell align="left"><button className={style.update} onClick={()=>openModalUpdate({id:row.id,date:row.date.slice(0,10),description:row.description,etat:row.etat})}>Update</button></TableCell>
              <TableCell align="left"><button className={style.delte} style={{backgroundColor:"#dc3545"}} onClick={()=>DelteData(row.id)} >Delete</button></TableCell>
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

















