/* define surveys, images, questionlists table */
Rituals.db.getSchemaBuilder = function(){
var schemaBuilder = lf.schema.create('rituals', 1);
schemaBuilder.createTable('Surveys').
    addColumn('questionlist_id', lf.Type.INTEGER).
    addColumn('name', lf.Type.STRING).
    addColumn('type', lf.Type.STRING).
    addColumn('status', lf.Type.STRING).
    addColumn('location_id', lf.Type.STRING).
    addColumn('edited', lf.Type.STRING).
    addColumn('progress', lf.Type.STRING).    // % completed
    addColumn('questions', lf.Type.OBJECT).
    addColumn('confirmation', lf.Type.OBJECT).
    addColumn('email_cc', lf.Type.OBJECT).  // ex. signatures
   	addColumn('done', lf.Type.BOOLEAN).		// ex. signatures
    addPrimaryKey(['id']);
    // addIndex('idxDeadline', ['deadline'], false, lf.Order.DESC); 

    schemaBuilder.createTable('Images').
    addColumn('survey_id', lf.Type.STRING).
    addColumn('question_id', lf.Type.INTEGER).
    addColumn('created', lf.Type.STRING). // DATE uses timestamp
    addColumn('base64', lf.Type.STRING).
    addColumn('thumb', lf.Type.STRING).
    addIndex('idxDeadline', ['survey_id'], false, lf.Order.DESC);
 
    /* define questionlists table */
    schemaBuilder.createTable('Questionlists').
    addColumn('questionlist_id', lf.Type.INTEGER).
    addColumn('name', lf.Type.INTEGER).
    addColumn('version', lf.Type.INTEGER).
    addColumn('language', lf.Type.STRING).
    addColumn('roles', lf.Type.STRING).
    addColumn('type', lf.Type.STRING).
    addColumn('created', lf.Type.STRING).    // % completed
    addColumn('questions', lf.Type.OBJECT).
    addIndex('idxDeadline', ['questionlist_id'], false, lf.Order.DESC); // set index


    return schemaBuilder;
};




