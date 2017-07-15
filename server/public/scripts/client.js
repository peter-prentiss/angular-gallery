console.log('JS sourced');

var myApp = angular.module('myApp', []);

myApp.controller('GalleryController', function($scope){
  // array of data with photos and descriptions.
  $scope.photoBank = photoGallery;
  // {url: ../images'..., description: ..., likes: 0, visible: true}

  // increments like counter
  $scope.addLike = function(photo) {
    console.log('liked');
    photo.likes++;
  }
  // toggles visible property so photo and description switch visibility
  $scope.toggle = function(photo) {
    console.log('toggle');
    photo.visible = !photo.visible;
    //increments view counter when switching back to photo view
    if (photo.visible) {
      photo.views++
    }
  }
});
