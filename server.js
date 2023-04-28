const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const BusinessCard = require('./models/business-card');
const connection = require('./config/database');
const { v4: uuidv4 } = require('uuid'); // Importar la función v4 de uuid

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

app.post('/api/business-card', (req, res) => {
    const { name, jobTitle, email, phone, address, website } = req.body;
  
    // Generar un ID único para el usuario
    const id = uuidv4();
  
    // Insertar los datos en la tabla 'business_cards'
    connection.query(
      'INSERT INTO business_cards (id, name, job_title, email, phone, address, website) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [id, name, jobTitle, email, phone, address, website],
      (error, results, fields) => {
        if (error) {
          console.error('Error al insertar los datos en la tabla business_cards:', error);
          return res.status(500).send('Error al insertar los datos en la base de datos');
        }
  
        console.log('Datos insertados en la tabla business_cards:', results);
  
        const data = {
          id: id,
          name: name,
          jobTitle: jobTitle,
          email: email,
          phone: phone,
          address: address,
          website: website
        };
  
        res.json(data);
      }
    );
  });
