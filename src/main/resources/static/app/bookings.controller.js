/**
 * Created by dan.geabunea on 3/29/2016.
 */
(function () {
    'use strict';

    angular
        .module('app')
        .controller('BookingsController', BookingsController);

    BookingsController.$inject = ['$http'];

    function BookingsController($http) {
        var vm = this;

        vm.bookings = [];
        vm.getAll = getAll;
        vm.getAffordable = getAffordable;
        vm.deleteBooking = deleteBooking;

        init();

        function init(){
            getAll();
        }

        function getAll(){
            var url = "/HotelBooking/bookings/all";
            var bookingsPromise = $http.get(url);
            bookingsPromise.then(function(response){
                vm.bookings = response.data;
            });
        }

        function getAffordable(){
            var url = "/HotelBooking/bookings/affordable/" + 100;
            var bookingsPromise = $http.get(url);
            bookingsPromise.then(function(response){
                vm.bookings = response.data;
            });
        }

        function deleteBooking(id){
            var url = "/HotelBooking/bookings/delete/" + id;
            $http.post(url).then(function(response){
                vm.bookings = response.data;
            });
        }

        function create(){
            var url = "/HotelBooking/bookings/create";

            var booking = {
                pricePerNight:300,
                hotelName:"Some Hotel",
                nbOfNights:5
            };

            $http.post(url, booking).then(function(response){
                alert('Hotel saved :)');
            });
        }
    }
})();
