import React from 'react'
import style from './demmande.module.scss'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {getDemandes,addDemandes} from '../../../services/demande-service'
import {useParams} from "react-router-dom";

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  

const Demmande = () => {
    let { id } = useParams();

    
    const classes = useStyles();
    const [tableData,setTableData]=React.useState([])
    const [data,setData]=React.useState({"user":localStorage.getItem("id"),"plante":id??"","etat":"en attendant"})

    React.useEffect(()=>{
        getDemandes().then(res=>{

            setTableData(res.data.filter(e=>{
                return  e.user==localStorage.getItem("id")
             }))
        })
    },[])
    const changeHandler=(e)=>{
        const {name,value}=e.target
        
        setData(e=>{
            return {...e,[name]:value}
        })
    }
    const addData=(e)=>{
        //e.preventDefault();
        addDemandes(data).then(res=>{
            alert("demmande a été ajouté")

        })
    }
    return (
        <div className={style.container}>
               <div className={style.header}>
                   <h1>Demmandes</h1>
               </div>
               <div className={style.formContainer}>
                        <form onSubmit={(e)=>addData(e)}>
                                    <div className = "form-group">
                                        <label> Nom: </label>
                                        <input required onChange={(e)=>{changeHandler(e)}} placeholder="Nom"  name="nom" className="form-control" 
                                            />
                                    </div>
                                    <div className = "form-group">
                                        <label> C.I.N: </label>
                                        <input required onChange={(e)=>{changeHandler(e)}} placeholder="Carte Identite Nationale" name="cin" className="form-control" 
                                             />
                                    </div>
                                    <div className = "form-group">
                                        <label> Localisation: </label>
                                        <input required onChange={(e)=>{changeHandler(e)}} placeholder="Localisation" name="localisation" className="form-control" 
                                            />
                                    </div>
                                    <div className = "form-group">
                                        <label> Numero du Telephone: </label>
                                        <input required onChange={(e)=>{changeHandler(e)}} placeholder=" Numero du Telephone"name="numTel" className="form-control" 
                                            />
                                    </div>
                                    <div className = "form-group">
                                        <label> City: </label>
                                        <input required onChange={(e)=>{changeHandler(e)}} placeholder="City" name="city" className="form-control" 
                                            />
                                    </div>
                                    <div className = "form-group">
                                        <label> Quantite: </label>
                                        <input required onChange={(e)=>{changeHandler(e)}} placeholder="Quantite" name="quantite" className="form-control" 
                                        />
                                    </div>
                                    <div className = "form-group">
                                        <label> plante_id </label>
                                        <input value={id} required onChange={(e)=>{changeHandler(e)}} placeholder="plante_id" name="plante" className="form-control" 
                                        />
                                    </div>
                                    <div className = "form-group">
                                        <label> Date Retour: </label>
                                        <input required onChange={(e)=>{changeHandler(e)}} placeholder="Date Retour" type="date" name="dateRetour" className="form-control" 
                                            />
                                    </div>
  

                                    <button  className="btn btn-primary btn-block" style={{width:"100%"}} >Save</button>
                                </form>
               </div>
               <div className={style.header}>
                   <h1>liste de vous demmande</h1>
               </div>
               <div className={style.table}>
               <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                        <TableCell align="left">Nom</TableCell>
                        <TableCell align="left">cin</TableCell>
                        <TableCell align="left">Localisation</TableCell>
                        <TableCell align="left">Numero du Telephone</TableCell>
                        <TableCell align="left">City</TableCell>
                        <TableCell align="left">Quantite</TableCell>
                        <TableCell align="left">DateRetour</TableCell>
                        <TableCell align="left">Etat</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tableData.map((row) => (
                        <TableRow key={row.name}>
            
                            <TableCell align="left">{row.nom}</TableCell>
                            <TableCell align="left">{row.cin}</TableCell>
                            <TableCell align="left">{row.localisation}</TableCell>
                            <TableCell align="left">{row.numTel}</TableCell>
                            <TableCell align="left">{row.city}</TableCell>
                            <TableCell align="left">{row.quantite}</TableCell>
                            <TableCell align="left">{row.dateRetour.slice(0,10)}</TableCell>
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

export default Demmande
