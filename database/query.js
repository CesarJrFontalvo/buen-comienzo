
const query_entities = `select id, modelo->>'RAZON_SOCIAL' as razon_social, modelo->>'NUMERO_DOCUMENTO' as numero_documento from  nbc_entidades order by modelo->>'RAZON_SOCIAL'`;


module.exports =  {
    query_entities,
   
};