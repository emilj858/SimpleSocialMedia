(function() {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = [];

    /* @ngInject */
    function HomeController() {
        var vm = this;
  
  		vm.posts = [];

  		vm.addPost = addPost;


  		function addPost() {
  				vm.posts.push(vm.newPost);

  		};

 
    }
})();