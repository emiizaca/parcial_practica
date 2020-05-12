import React, { Component } from "react";

class ComboUsersId extends Component {

    render(){

        const {usersId, handerCombo } = this.props;

        const usersIdOption = usersId.map( 
            r => (
                <option key={r.id} value={r.nombre}>{r.nombre}</option>   
            )
        )

        return (
            <div>
                <select onChange = {handerCombo}> 
                    <option key={0} value={0}>Seleccione un User Id...</option>
                    {usersIdOption}
                </select>
            </div>
        )
    }
}

export default ComboUsersId;