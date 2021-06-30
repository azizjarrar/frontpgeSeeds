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
import {addvisites,getvisites} from '../../../services/visite-service'
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});



const Vistes = () => {
    const classes = useStyles();
    const [data,setData]=React.useState({"user":localStorage.getItem("id"),"etat":"en attendant"})
    const [tableData,setTableData]=React.useState([])
    React.useEffect(()=>{
        getvisites().then(res=>{
            setTableData(res.data.filter(e=>{
               return  e.user==localStorage.getItem("id")
            }))
        })
    },[])
    const onChangeHandler=(e)=>{
        const {name,value}=e.target
        setData(e=>{
            return {...e,[name]:value}
        })

    }
    const addVsite=()=>{
        addvisites(data).then(res=>{
            alert("visite a été ajouté")
        })
    }
    return (
        <div className={style.container}>
               <div className={style.header}>
                   <h1>Vistes</h1>
               </div>
               <div className={style.formContainer}>
                    <form onSubmit={(e)=>addVsite(e)}>
 
                        <div className="form-group">
                            <label> Date: </label>
                            <input     onChange={(e)=>onChangeHandler(e)} placeholder="Date" type="date" name="date" className="form-control"
                                required/>
                        </div>
                        <div className="form-group">
                            <label> Description: </label>
                            <textarea  onChange={(e)=>onChangeHandler(e)} rows="6"  placeholder="Description" name="description" className="form-control"
                                required/>
                        </div>

                        <button   className="btn btn-primary btn-block" >Sauvegarder</button>
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
                        {tableData.map((row) => (
                            <TableRow key={row.name}>

                            <TableCell align="left">{row.date.slice(0,10)}</TableCell>
                            <TableCell align="left">{row.description}</TableCell>
                            <TableCell align="left">{row.etat}</TableCell>
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
