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
const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  
  function createData(Nom, Cin, Localisation, NumeroduTelephone,City,Quantite,DateRetour,Etat) {
    return { Nom, Cin, Localisation, NumeroduTelephone,City,Quantite,DateRetour,Etat };
  }
const rows =  [
    createData('ahmed', "59219156", "Localisation", "NumeroduTelephone","City","Quantite","DateRetour","Etat"),
    createData('ali', "47849156", "Localisation", "NumeroduTelephone","City","Quantite","DateRetour","Etat"),
    createData('ahmed', "15849156", "Localisation", "NumeroduTelephone","City","Quantite","DateRetour","Etat"),
    createData('morad', "15855156", "Localisation", "NumeroduTelephone","City","Quantite","DateRetour","Etat"),
    createData('ahmed', "23549156", "Localisation", "NumeroduTelephone","City","Quantite","DateRetour","Etat"),
    createData('molka', "15849156", "Localisation", "NumeroduTelephone","City","Quantite","DateRetour","Etat"),
    createData('asma', "15849156", "Localisation", "NumeroduTelephone","City","Quantite","DateRetour","Etat"),
    createData('morad', "99949156", "Localisation", "NumeroduTelephone","City","Quantite","DateRetour","Etat"),
    createData('hbib', "88849156", "Localisation", "NumeroduTelephone","City","Quantite","DateRetour","Etat"),
  
  
  ];
const Demmande = () => {

    
    const classes = useStyles();

    return (
        <div className={style.container}>
               <div className={style.header}>
                   <h1>Demmandes</h1>
               </div>
               <div className={style.formContainer}>
                        <form>
                                    <div className = "form-group">
                                        <label> Nom: </label>
                                        <input placeholder="Nom"  name="nom" className="form-control" 
                                            />
                                    </div>
                                    <div className = "form-group">
                                        <label> C.I.N: </label>
                                        <input placeholder="Carte Identite Nationale" name="cin" className="form-control" 
                                             />
                                    </div>
                                    <div className = "form-group">
                                        <label> Localisation: </label>
                                        <input placeholder="Localisation" name="localisation" className="form-control" 
                                            />
                                    </div>
                                    <div className = "form-group">
                                        <label> Numero du Telephone: </label>
                                        <input placeholder=" Numero du Telephone"name="numTel" className="form-control" 
                                            />
                                    </div>
                                    <div className = "form-group">
                                        <label> City: </label>
                                        <input placeholder="City" name="city" className="form-control" 
                                            />
                                    </div>
                                    <div className = "form-group">
                                        <label> Quantite: </label>
                                        <input placeholder="Quantite" name="quantite" className="form-control" 
                                            />
                                    </div>
                                    <div className = "form-group">
                                        <label> Date Retour: </label>
                                        <input placeholder="Date Retour" type="date" name="dateRetour" className="form-control" 
                                            />
                                    </div>
  

                                    <button className="btn btn-primary btn-block" style={{width:"100%"}} >Save</button>
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
                        {rows.map((row) => (
                        <TableRow key={row.name}>
            
                            <TableCell align="left">{row.Nom}</TableCell>
                            <TableCell align="left">{row.Cin}</TableCell>
                            <TableCell align="left">{row.Localisation}</TableCell>
                            <TableCell align="left">{row.NumeroduTelephone}</TableCell>
                            <TableCell align="left">{row.City}</TableCell>
                            <TableCell align="left">{row.Quantite}</TableCell>
                            <TableCell align="left">{row.DateRetour}</TableCell>
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

export default Demmande
