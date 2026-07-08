let usuariosGlobales = [];
let anunciosGlobales = [];

exports.handler = async (event) => {
    const method = event.requestContext?.http?.method || event.httpMethod;
    const tipo = event.queryStringParameters?.tipo;
    
    const headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
    };

    try {
        if (method === 'GET') {
            if (tipo === 'usuarios') {
                return { statusCode: 200, headers, body: JSON.stringify(usuariosGlobales) };
            } else if (tipo === 'anuncios') {
                return { statusCode: 200, headers, body: JSON.stringify(anunciosGlobales) };
            }
        } 
        
        if (method === 'POST') {
            const body = JSON.parse(event.body || '{}');
            if (tipo === 'usuarios') {
                usuariosGlobales.push(body);
                return { statusCode: 201, headers, body: JSON.stringify({ message: "Usuario guardado" }) };
            } else if (tipo === 'anuncios') {
                anunciosGlobales.push(body);
                return { statusCode: 201, headers, body: JSON.stringify({ message: "Anuncio publicado" }) };
            }
        }

        return { statusCode: 400, headers, body: JSON.stringify({ message: "Parámetro no válido" }) };
    } catch (error) {
        return { statusCode: 500, headers, body: JSON.stringify({ error: error.message }) };
    }
};
