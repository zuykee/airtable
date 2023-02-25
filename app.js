module.exports = function pushRecord(fio,description, assignee, status) {

// var Airtable = require('airtable');
// var base = new Airtable({apiKey: 'key9IEgtWkAKqJPKl'}).base('appxd0FLcQkixaFx4');

// base('Table 1').create([
//     {
//       "fields": {
//         "Name": "Настя",
//         "Notes": "для нее я это все и делаю",
//         "Assignee": {
          
//           "email": "Zuykee.bone@gmail.com",
//           "name": "Kote Волобуев"
//         },
//         "Status": "Done"
//       }
//     },
    
//   ], function(err, records) {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     records.forEach(function (record) {
//       console.log(record.getId());
//     });
//   });

// base('Table 1').select({
//     view: 'Grid view'
// }).firstPage(function(err, records) {
//     if (err) { console.error(err); return; }
//     records.forEach(function(record) {
//         console.log('Retrieved', record.getId());
//     });
// });
console.log('now it works',base);
return base
}