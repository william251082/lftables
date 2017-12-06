/**
 * Builds the database schema.
 * @return {!lf.schema.Builder}
 * @private
 */
LovefieldService.prototype.buildSchema_ = function() {
  // Step1: Create three tables, Surveys, Questionlists' and Images.
   var schemaBuilder = lf.schema.create('rituals', 1);

    /* define surveys table */
    schemaBuilder.createTable('Surveys').
    addColumn('questionlist_id', lf.Type.INTEGER).
    addColumn('name', lf.Type.STRING).
    addColumn('type', lf.Type.STRING).
    addColumn('status', lf.Type.STRING).
    addColumn('location_id', lf.Type.STRING).
    addColumn('edited', lf.Type.DATE_TIME).
    addColumn('progress', lf.Type.STRING).    // % completed
    addColumn('questions', lf.Type.OBJECT).
    addColumn('confirmation', lf.Type.OBJECT).
    addColumn('email_cc', lf.Type.OBJECT).  // ex. signatures
    addColumn('done', lf.Type.BOOLEAN).     // ex. signatures
    addPrimaryKey(['id']);
    // addIndex('idxDeadline', ['deadline'], false, lf.Order.DESC); 
 

    /* define questionlists table */
    schemaBuilder.createTable('Questionlists').
    addColumn('questionlist_id', lf.Type.INTEGER).
    addColumn('name', lf.Type.INTEGER).
    addColumn('version', lf.Type.INTEGER).
    addColumn('language', lf.Type.STRING).
    addColumn('roles', lf.Type.STRING).
    addColumn('type', lf.Type.STRING).
    addColumn('created', lf.Type.DATE_TIME).    // % completed
    addColumn('questions', lf.Type.OBJECT).
    addIndex('idxDeadline', ['questionlist_id'], false, lf.Order.DESC); // set index


    /* define images table */
    schemaBuilder.createTable('Images').
    addColumn('survey_id', lf.Type.STRING).
    addColumn('question_id', lf.Type.INTEGER).
    addColumn('created', lf.Type.DATE_TIME). // DATE uses timestamp
    addColumn('base64', lf.Type.STRING).
    addColumn('thumb', lf.Type.STRING).
    addIndex('idxDeadline', ['survey_id'], false, lf.Order.DESC);


    return schemaBuilder;
};



var SurveysRaw;

var QuestionlistsRaw;

var ImagesRaw;


/**
 * Inserts data in the three tables, Surveys, Questionlists and Images.
 * @param {!Array<!SurveysRaw>} SurveysRaw
 * @param {!Array<!QuestionlistsRaw>} QuestionlistsRaw
 * @param {!Array<!QuestionlistsRaw>} ImagesRaw
 * @return {!IThenable} A promise that is resolved after both tables have been
 *     populated.
 */
LovefieldService.prototype.insertData = function(
    surveysRaw, questionlistsRaw, imagesRaw) {
   // Generating Lovefield rows from the raw rows.
  var surveysRaw = surveysRaw.map(
      function(obj) { return this.si_.createRow(obj); }, this);
  var questionlistsRaw = questionlistsRaw.map(
      function(obj) { return this.si_.createRow(obj); }, this);
  var imagesRaw = imagesRaw.map(
      function(obj) { return this.si_.createRow(obj); }, this);

  
  // Step2: Insert the raw data to the database.
  return Promise.resolve();
};

