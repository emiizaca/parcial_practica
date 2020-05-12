import React, {Component} from "react";

class Tabla extends Component{

    render(){

        const {listaRegistros, titulo} = this.props;

        const datosRegistros = listaRegistros.map(
            p => (
                <tr key={p.alpha3Code}>
                    <td>{p.userId}</td>
                    <td>{p.id}</td>
                    <td>{p.title}</td>
                    <td>{p.body}</td>
                </tr>
            )
        )

        return(
            <div>
                <table>
                    <caption>{titulo}</caption>
                    <thead>
                        <tr>
                            <th>userId</th>
                            <th>id</th>
                            <th>title</th>
                            <th>body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datosRegistros}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Tabla;