const mysql = require('mysql');

class SQL {

    constructor() {
        //Conexion a DB local
        // this.connection = mysql.createConnection({
        //     host: 'localhost',
        //     user: 'root',
        //     password: '',
        //     database: 'connecting_humans'
        // });
        //Conexion a base de HEROKU
        // this.connection = mysql.createConnection({
        //     host: 'us-cdbr-east-05.cleardb.net',
        //     user: 'bd7f2418edf8d7',
        //     password: '233af0e3',
        //     database: 'heroku_ec356f3baed17a0'
        // });
        //Conexion a base de AWS
        this.connection = mysql.createConnection({
            host: 'database-1.ctkuud2jbxgj.us-east-1.rds.amazonaws.com',
            user: 'admin',
            password: '12345678',
            database: 'connecting_humans'
        });

    }

    AbrirConexion() {
        this.connection.connect(error => {
            if (error) throw error;
            console.log('Conexion exitosa');
        });
    }

    CerrarConexion() {
        this.connection.end(function(error) {
            if (error) throw error;
            console.log('Desconexion exitosa');
        });
    }

}

module.exports = SQL;