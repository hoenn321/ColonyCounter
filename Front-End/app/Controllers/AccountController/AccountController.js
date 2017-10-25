angular
    .module('App.AccountController', [])
    .controller('AccountController', AccountController);

AccountController.$inject = [
    
];

function AccountController(){

    var vm = this;
    vm.user = {
    username: "User",
    fullName: "Steve Hobs",
    email: "Steve@orange.com",
    setnewpassword: "Iluvorange",
    confirmnewpassword: "Iluvorange",

}    
}
