var adminurl = "http://104.154.89.21:82/";
// var adminurl = "http://localhost:1337/";
var uploadurl = adminurl + "upload/";
var imgpath = uploadurl + "readFile";
var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function($http) {
    var navigation = [{
        name: "Users",
        classis: "active",
        link: "#/page/userView",
        subnav: []
    }, {
        name: "City",
        classis: "active",
        link: "#/page/viewCity",
        subnav: []
    }, {
        name: "Slider",
        classis: "active",
        link: "#/page/viewSlider",
        subnav: []
    }, {
        name: "Config",
        classis: "active",
        link: "#/page/viewConfig",
        subnav: []
    }, {
        name: "Explore Smaash",
        classis: "active",
        link: "#/page/viewExploreSmash",
        subnav: []
    }, {
        name: "Promotions",
        classis: "active",
        link: "#/page/viewPromotions",
        subnav: []
    }, {
        name: "Recharge Smaash Card",
        classis: "active",
        link: "#/page/viewRechargeSmaashCard",
        subnav: []
    }, {
        name: "Stars",
        classis: "active",
        link: "#/page/viewStars",
        subnav: []
    }, {
        name: "Events",
        classis: "active",
        link: "#/page/viewEvent",
        subnav: []
    }, {
        name: "Subscribe",
        classis: "active",
        link: "#/page/viewSubscribe",
        subnav: []
    }];

    return {
        getnav: function() {
            return navigation;
        },
        makeactive: function(menuname) {
            for (var i = 0; i < navigation.length; i++) {
                if (navigation[i].name == menuname) {
                    navigation[i].classis = "active";
                } else {
                    navigation[i].classis = "";
                }
            }
            return menuname;
        },
        saveApi: function(data, apiName, successCallback, errorCallback) {
            $http.post(adminurl + apiName, data).success(successCallback).error(errorCallback);
        },
        deleteProject: function(data, successCallback, errorCallback) {
            $http.post(adminURL + "project/delete", data).success(successCallback).error(errorCallback);
        },
        findProjects: function(apiName, pagination, successCallback, errorCallback) {
            $http.post(adminurl + apiName, pagination).success(successCallback).error(errorCallback);
        },
        findOneProject: function(apiName, urlParams, successCallback, errorCallback) {
            console.log(adminurl + apiName);
            $http.post(adminurl + apiName, urlParams).success(successCallback).error(errorCallback);
        },

        getDropDown: function(apiName, successCallback, errorCallback) {
            $http.post(adminurl + apiName).success(successCallback).error(errorCallback);
        },
        submitLogin: function(data, successCallback, errorCallback) {
            $http.post(adminurl + "register/login", data).success(successCallback).error(errorCallback);
        },
        deleteApi: function(data, successCallback, errorCallback) {
            $http.post(adminURL + "api/delete", data).success(successCallback).error(errorCallback);
        },
        logout: function(successCallback, errorCallback) {
            $http.post(adminurl + "register/logout").success(successCallback).error(errorCallback);
        },
        sideMenu1: function(apiName, pagination, successCallback, errorCallback) {
            $http.post(adminurl + apiName, pagination).success(successCallback).error(errorCallback);
        },

    };
});
