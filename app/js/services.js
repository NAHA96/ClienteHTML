'use strict';

var customerServices=angular.module('myApp.services', ['ngResource']);
customerServices.factory('Customers',function($resource){
    return $resource('http://localhost:8080/customer/webresources/com.udea.customer.entity.customer',{},{
        query:{method:'GET',isArray:true}
    });
});
