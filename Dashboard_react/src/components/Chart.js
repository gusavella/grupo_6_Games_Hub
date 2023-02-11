import React from 'react';
import ChartRow from './ChartRow';


function  Chart ({infoUsers}){
    if (infoUsers!== undefined){
        let users=infoUsers.users
        console.log('Usuarios en chart:',users)
    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Correo</th>
                                <th>Detalle</th>
                               
                            </tr>
                        </thead>
                        <tbody>
                           
                            {console.log('usuarios en chart:',infoUsers.users)}
                            {
                                
                                users.map( ( row , i) => {
                                return <ChartRow { ...row} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )}
    else{
        return <h2>Cargando...</h2>
    }
}

export default Chart;