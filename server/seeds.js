// Meteor.startup(function () {

//   if (Contacts.find({}).count() === 0) {
//     _(2).times(function(n) {
//       var user = Fake.user();

//       Contacts.insert({
//         name: {
//           first: user.name,
//           last: user.surname
//         },
//         emails: [{label: 'Work', address: user.email}],
//         priority: Fake.fromArray(['High', 'Medium', 'Low']),
//         location: {
//           city: Fake.word(),
//           province: Fake.fromArray(PROVINCES)
//         },
//         details: {
//           notes: Fake.paragraph(),
//           active: Fake.fromArray([true, false])
//         }
//       });
//     });
//   }

// });
