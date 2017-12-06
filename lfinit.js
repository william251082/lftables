// Define rituals.db namespace

//var Rituals = { db: {} };

/**
 * A singleton service used by the rest of the application to make calls to the
 * Lovefield API.
 * @constructor
 */

var LovefieldService = function() {
  // Following member variables are initialized within getDbConnection().
  this.db_ = null;
  this.su_ = null;
  this.ql_ = null;
  this.im_ = null;
};

/**
 * Initializes member variables that can't be initialized before getting a
 * connection to the database.
 * @private
 */
LovefieldService.prototype.onConnected_ = function() {
  this.su_ = this.db_.getSchema().table('Surveys');
  this.ql_ = this.db_.getSchema().table('Questionlists');
  this.im_ = this.db_.getSchema().table('Images');
  alert('DB connection established.');
};


/**
 * Instantiates the DB connection (re-entrant).
 * @return {!IThenable<!lf.Database>}
 */
LovefieldService.prototype.getDbConnection = function() {
  if (this.db_ != null) {
    return this.db_;
  }

  var schemaBuilder = this.buildSchema_();

  // This is necessary for the app to run with no errors on the 1st step.
  if (schemaBuilder == null) {
    return Promise.resolve(null);
  }

  var connectOptions = {storeType: lf.schema.DataStoreType.INDEXED_DB};
  return this.buildSchema_().connect(connectOptions).then(
      function(db) {
        this.db_ = db;
        this.onConnected_();
        return db;
      }.bind(this));
};





