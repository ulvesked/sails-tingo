
/**
 * Module dependencies
 */

var async = require('async');

/**
 * Manage a connection to a Mongo Server
 *
 * @param {Object} config
 * @return {Object}
 * @api private
 */

var Connection = module.exports = function Connection(config, cb) {
  var self = this;

  // Hold the config object
  this.config = config || {};

  // Build Database connection
  this._buildConnection(function(err, db) {
    if(err) return cb(err);

    // Store the DB object
    self.db = db;

    // Return the connection
    cb(null, self);
  });
};


/////////////////////////////////////////////////////////////////////////////////
// PUBLIC METHODS
/////////////////////////////////////////////////////////////////////////////////


/**
 * Create A Collection
 *
 * @param {String} name
 * @param {Object} collection
 * @param {Function} callback
 * @api public
 */

Connection.prototype.createCollection = function createCollection(name, collection, cb) {
  var self = this;

  // Create the Collection
  this.db.createCollection(name, function(err, result) {
    if(err) return cb(err);

    // Create Indexes
    self._ensureIndexes(result, collection.indexes, cb);
  });
};

/**
 * Drop A Collection
 *
 * @param {String} name
 * @param {Function} callback
 * @api public
 */

Connection.prototype.dropCollection = function dropCollection(name, cb) {
  this.db.dropCollection(name, cb);
};


/////////////////////////////////////////////////////////////////////////////////
// PRIVATE METHODS
/////////////////////////////////////////////////////////////////////////////////


/**
 * Build Server and Database Connection Objects
 *
 * @param {Function} callback
 * @api private
 */

Connection.prototype._buildConnection = function _buildConnection(cb) {

  // Set the configured options
  var connectionOptions = {};

  if(!this.config.dbPath) {
    throw new Error('The TingoDB Adapter requires a dbPath config option.');
  }

  var config = ['memStore', 'nativeObjectID', 'cacheSize', 'cacheMaxObjSize', 'searchInArray'];
  for(var i in config) {
    if(typeof this.config[config[i]] != 'undefined') {
      connectionOptions[config[i]] = this.config[config[i]];
    }
  }
  try {
    var Db = require('tingodb')(connectionOptions).Db;
    var db = new Db(this.config.dbPath, {});
    cb(null, db);
  }
  catch(err) {
    cb(err);
  }
};

/**
 * Ensure Indexes
 *
 * @param {String} collection
 * @param {Array} indexes
 * @param {Function} callback
 * @api private
 */

Connection.prototype._ensureIndexes = function _ensureIndexes(collection, indexes, cb) {
  var self = this;

  function createIndex(item, next) {
    collection.ensureIndex(item.index, item.options, next);
  }

  async.each(indexes, createIndex, cb);
};
