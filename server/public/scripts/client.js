console.log('JS sourced');

var myApp = angular.module('myApp', []);

myApp.controller('GalleryController', function($scope){
  // array of data with photos and descriptions.
  $scope.photoBank = photoGallery;
  // {url: ../images'..., description: ..., likes: 0, visible: true}

  // increments like counter
  $scope.addLike = function (photo) {
    photo.likes++;
  }
  // toggles visible property so photo and description switch visibility
  $scope.toggle = function (photo) {
    photo.visible = !photo.visible;
    //increments view counter when switching back to photo view
    if (photo.visible) {
      photo.views++
    }
  }
  // Adds comment to photo's comment array
  $scope.addComment = function (photo, comment) {
    photo.comments.push(comment);
  }
  // Toggles photo's showComments property when clicked
  $scope.showComments = function (photo) {
    photo.showComments = !photo.showComments;
  }
});
