Template.photobutton.created = function () {
  console.log("photobutton created");
  
  
};

Template.photos.helpers({
  photos: function () {
   return Photos.find();   
  }
});

Template.photobutton.events({
  'click [data-action="photo"]': function () {
    
    console.log("clicked photo, init MeteoricCamera");
    
    MeteoricCamera.getPicture({
      width: 400,
      height: 400,
      quality: 33
    }, function (error , data) {
      if (error) {
        console.log("error", error)
      } else {
        console.log("data", data);
        
        Photos.insert({
          src : data
        });
      };
    });
  }
});