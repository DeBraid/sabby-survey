Template.photobutton.created = function () {
  console.log("photobutton created");
};

Template.photos.helpers({
  photos: function () {
   return Photos.find();   
  },
  photoUrl: function () {
    var foo = Session.get("photo");
   // var bar = Photos.find();   
    console.log(foo);
    // console.log(bar);
    return foo;
  }
});

Template.photobutton.events({
  'click [data-action="photo"]': function () {
    
    console.log("clicked photo, init MeteoricCamera");
    
    function afterInsertCallback (error, data) {
      if (error) {
        throw error;
      } else {
        Session.set("photo", {
          src : data 
        });
      }
    }

    function afterPhotoCallback (error , data) {
      if (error) {
        console.log("error", error)
      } else {
        Photos.insert({
          src : data 
        }, afterInsertCallback() );
        
      };
    };
   
    MeteoricCamera.getPicture({
      width: 400,
      height: 400,
      quality: 33
    }, afterPhotoCallback() );

  }
});