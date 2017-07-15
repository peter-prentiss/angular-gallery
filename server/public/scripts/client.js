console.log('JS sourced');

var myApp = angular.module('myApp', []);

myApp.controller('GalleryController', function(){
  let gallery = this;
  gallery.photoBank = [
    {url: '../images/peter.shopped.jpg',
     description: 'A handsome Prime person',
     likes: 0}
   ];
  // {url: ../images'..., description: ..., likes: 0, }
  gallery.addLike = function(photo) {
    console.log('liked');
    photo.likes++;
  }
});
