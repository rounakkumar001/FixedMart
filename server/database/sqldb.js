import sql from 'mssql';

// Database configuration
const config = {
    user: 'sa',
    password: 'Sql@1034',
    server: 'localhost',
    database: 'E_CART_OLTP_SYSTEM',
    options: {
      encrypt: true, 
      trustServerCertificate: true, 
    },
  };

export async function connectToSql() {
    try {
      await sql.connect(config);
      console.log('Connected to SQL Server successfully.');
    } catch (err) {
      console.error('Sql Database connection failed: ', err);
    }
  }
  

  export default connectToSql;