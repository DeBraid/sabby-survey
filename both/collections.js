Photos = new Mongo.Collection('photos');

PROVINCES = [
  "ON", "QC", "BC", "AB", "MB", "SK", "NS", "NB", "NL", "PE", "NT", "YT", "NU"
];

Contacts = new Mongo.Collection('contacts');

Contacts.before.insert(function (userId, doc) {
  var gender = Random.choice(['men', 'women']);
  var num = _.random(0, 50);
  doc.avatarUrl = 'https://randomuser.me/api/portraits/thumb/' + gender + '/' + num + '.jpg';
});

Contacts.attachSchema(new SimpleSchema({
  name: {
    type: Object
  },
  'name.title': {
    type: String,
    label: 'Issue',
    autoform: {
      'label-type': 'floating',
      placeholder: 'Title'
    },
    max: 40
  },
  'name.first': {
    type: String,
    label: 'First Name',
    autoform: {
      'label-type': 'floating',
      placeholder: 'First Name'
    },
    max: 200
  },
  'name.last': {
    type: String,
    label: 'Last Name',
    autoform: {
      'label-type': 'floating',
      placeholder: 'Last Name'
    },
    max: 200
  },
  /* 
  Need to implement photos as part of autoform
  -- ionic role?

  */

  photos : {
    type: [Object]
  },
  'photos.$.src': {
    type: String
  },
  emails: {
    type: [Object]
  },
  'emails.$.address': {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
    autoform: {
      'label-type': 'placeholder',
      placeholder: 'Email Address'
    }
  },
  'emails.$.label': {
    type: String,
    label: 'Label',
    autoform: {
      options: [
        {value: 'Work', label: 'Work'},
        {value: 'Home', label: 'Home'},
        {value: 'School', label: 'School'},
        {value: 'Other', label: 'Other'}
      ]
    }
  },
  maintenance: {
    type: String,
    optional: true,
    autoform: {
      options: [
        {value: 'Line', label: 'Line' },
        {value: 'Base', label: 'Basic' }
      ],
      type: 'select-radio'
    }
  },
  priority: {
    type: String,
    optional: true,
    autoform: {
      options: [
        {value: 'High', label: 'High' , color : 'red'},
        {value: 'Medium', label: 'Medium' , color : 'orange'},
        {value: 'Low', label: 'Low' , color : 'yellow'}
      ],
      type: 'select-radio'
    }
  },
  location: {
    type: Object
  },
  'location.city': {
    type: String,
    max: 200
  },
  'location.province': {
    type: String,
    autoform: {
      options: _.map(PROVINCES, function (state) {
        return {label: state, value: state};
      })
    }
  },
  details: {
    type: Object
  },
  'details.notes': {
    type: String,
    label: 'Notes',
    optional: true,
    autoform: {
      rows: 10,
      'label-type': 'stacked'
    }
  },
  'details.active': {
    type: Boolean,
    defaultValue: true,
    autoform: {
      type: 'toggle'
    }
  },
  avatarUrl: {
    type: String,
    optional: true
  },
  createdAt: {
    type: Date,
    autoValue: function () {
      if (this.isInsert) {
        return new Date();
      } else {
        this.unset();
      }
    }
  }
}));
