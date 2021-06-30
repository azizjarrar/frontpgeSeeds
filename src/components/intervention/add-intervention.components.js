import React, { Component } from "react";
import InterventionDataService from "../../services/intervention-service";
const  AddVisite =()=> {


    return (
        <div>
            <br></br>
               <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> Description: </label>
                                        <input placeholder="Description" name="description" className="form-control" 
                                            value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveOrUpdateIntervention}>Sauvegarder</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

               </div>
        </div>
    )

}
