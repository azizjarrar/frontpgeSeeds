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
import {getinterventions,addinterventions} from '../../../services/intervention-service'
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});



const Intervenetion = () => {
    const classes = useStyles();
    const [data,setData]=React.useState({"user":localStorage.getItem("id")})
    const [tableData,setTableData]=React.useState([])
    React.useEffect(()=>{
      getinterventions().then(res=>{
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
    const addterventionsFn=()=>{
      console.log(data)

      addinterventions(data).then(res=>{
            alert("visite a été ajouté")
        })
    }
    return (
        <div className={style.container}>
               <div className={style.header}>
                   <h1>intervention</h1>
               </div>
               <div className={style.formContainer}>
               <form onSubmit={(e)=>{addterventionsFn()}}>

                        <div className="form-group">
                            <label> Description: </label>
                            <textarea onChange={e=>{onChangeHandler(e)}} required rows="6"  placeholder="Description" name="description" className="form-control"
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
                        {tableData.map((row) => (
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
