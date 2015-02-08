Template.photobutton.created = function () {
  console.log("photobutton created");
  
  
};

Template.photobutton.helpers({
  photo: function () {
      console.log("inside photo")
  }
});

Template.photobutton.events({
  'click [data-action="photo"]': function () {
     console.log("clicked photo, init MeteoricCamera");
    MeteoricCamera.getPicture({
      width: 400,
      height: 400,
      quality: 33
    });
  }
});