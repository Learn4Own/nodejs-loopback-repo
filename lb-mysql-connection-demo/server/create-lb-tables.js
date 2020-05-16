var server      = require('./server');
var ds          = server.dataSources.mySqlDs;
var lbTables    = ['User', 'AccessToken', 'ACL', 'RoleMapping', 'Role'];

//ALWAYS USE
ds.automigrate(lbTables, function(er) {
  if (er) throw er;
  console.log('Loopback tables [' - lbTables - '] created in ', ds.adapter.name);
  ds.disconnect();
});

// ds.automigrate(lbTables, function(er) {
//   if (er) throw er;
//   console.log('Loopback tables [' - lbTables - '] created in ', ds.adapter.name);
//   ds.disconnect();
// });