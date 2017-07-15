console.log('JS sourced');

var myApp = angular.module('myApp', []);

myApp.controller('GalleryController', function(){
  let gallery = this;
  gallery.photoBank = [
    {url: '../images/peter.shopped.jpg',
     description: 'A handsome Prime person',
     likes: 0,
     visible: true
   }
   ];
  // {url: ../images'..., description: ..., likes: 0, visible: true}
  gallery.addLike = function(photo) {
    console.log('liked');
    photo.likes++;
  }
  gallery.toggle = function(photo) {
    console.log('toggle');
    photo.visible = !photo.visible;
  }
});
