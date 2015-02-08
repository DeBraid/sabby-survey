Template.photobutton.created = function () {
  alert("photobutton created");
};

Template.photobutton.helpers({
  photo: function () {
      console.log("inside photo")
      MeteoricCamera.getPicture({
        width: 400,
        height: 400,
        quality: 33
      });
  }
});

Template.photobutton.events({
  'click [data-action="photo"]': function () {
    console.log('clicking data data-action photo')
  }
});