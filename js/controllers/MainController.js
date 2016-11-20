angular.module('myApp', []).controller('MainController', function($scope) {
    $scope.names = [

        {
            firstName: 'Autumn',
            lastName: 'Heilgeist',
            birthDay: 21,
            birthMonth: 'October',
            birthYear: 1967

        },
        {
            firstName: 'Tom',
            lastName: 'Dayment',
            birthDay: 13,
            birthMonth: 'January',
            birthYear: 1952

        },
        {
            firstName: 'Joyce',
            lastName: 'Narveson',
            birthDay: 16,
            birthMonth: 'March',
            birthYear: 1937

        },
        {
            firstName: 'Lexi',
            lastName: 'Heilgeist',
            birthDay: 7,
            birthMonth: 'March',
            birthYear: 2007

        },
        {
            firstName: 'Ken',
            lastName: 'Narveson',
            birthDay: 2,
            birthMonth: 'December',
            birthYear: 1932

        },
        {
            firstName: 'Dolly',
            lastName: 'Heilgeist',
            birthDay: 3,
            birthMonth: 'January',
            birthYear: 2007

        },
        {
            firstName: 'Sheree',
            lastName: 'Hagen',
            birthDay: 11,
            birthMonth: 'January',
            birthYear: 1952

        },
        {
            firstName: 'Laura',
            lastName: 'Seiber',
            birthDay: 13,
            birthMonth: 'October',
            birthYear: 1979

        },
        {
            firstName: 'Heather',
            lastName: 'Smith',
            birthDay: 13,
            birthMonth: 'June',
            birthYear: 1979

        },
        {
            firstName: 'Tanya',
            lastName: 'Rogers',
            birthDay: 12,
            birthMonth: 'February',
            birthYear: 1979

        }
    ];
    $scope.orderByMe = function(x) {
        $scope.myOrderBy = x;
    }
});