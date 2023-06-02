import sql from 'mssql'

const dbSettings = {
    user: "mpadmin",
    password: "mpadmin",
    server: "localhost",
    database: "mpfiscaliadb",
    options: {
        encrypt: true,
        trustServerCertificate: true,
    },
};

export async function getConnection(){
    try {
        const pool = await sql.connect(dbSettings);
        return pool;
    } catch (error) {
        console.error(error)
        throw error;
    } 
}
export {sql};

