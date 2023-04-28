const mysql = require('mysql');

// Credenciales de acceso a la base de datos
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'business_cards_db'
};

// Crear la conexión a la base de datos
const connection = mysql.createConnection(dbConfig);

// Conectar a la base de datos
connection.connect(error => {
  if (error) {
    console.error('Error de conexión a la base de datos:', error);
    return;
  }
  console.log('Conexión a la base de datos establecida');
});

// Exportar la instancia de conexión
module.exports = connection;
