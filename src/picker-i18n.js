angular.module("ion-datetime-picker")
  .factory("$ionicPickerI18n", function($window) {
    return {
      ok: "OK",
      cancel: "Cancel",
      okClass: "button-positive",
      cancelClass: "button-stable",
      arrowButtonClass: "button-positive",
      weekdays: $window.moment ? $window.moment.weekdaysMin() : ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"],
      months: $window.moment ? $window.moment.months() : ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    };
  });
