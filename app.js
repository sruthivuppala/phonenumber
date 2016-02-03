/**
 * Created by vsrut on 02-02-2016.
 */
(function() {
    'use strict';
    angular
        .module("angular_lib", [])
        .controller('Format_PhoneNumber', Format_PhoneNumber);

    Format_PhoneNumber.$inject = [];

    function Format_PhoneNumber() {
        var p_no = this;
        p_no.country_code = 'option-1';
        p_no.phone_number = '';
        p_no.formatted = '';
    }
    angular
        .module("angular_lib")
        .filter('format',format);

    function format(){
      return function(pno,ccode){
          var rez;
          var phoneStr = pno;
          if (phoneStr.length == 10) {
              switch(ccode){
                  case 'option-1':
                      rez = [];
                      rez.push('+1 ');
                      rez.push(' ');
                      rez.push('(');
                      rez.push(phoneStr.substring(0, 3));
                      rez.push(') ');
                      rez.push(phoneStr.substring(3, 6));
                      rez.push('-');
                      rez.push(phoneStr.substring(6));
                      return rez.join('');
                  case 'option-2':
                      rez = [];
                      rez.push('+91 ');
                      rez.push(phoneStr.substring(0, 5));
                      rez.push('- ');
                      rez.push(phoneStr.substring(5));
                      return rez.join('');
                  case 'option-3':
                      rez = [];
                      rez.push('+49 ');
                      rez.push(' ');
                      rez.push(phoneStr.substring(0, 2));
                      rez.push('-');
                      rez.push(phoneStr.substring(2, 5));
                      rez.push('-');
                      rez.push(phoneStr.substring(5));
                      return rez.join('');
                  case 'option-4':
                      rez = [];
                      rez.push('+33 0');
                      rez.push(phoneStr.substring(1, 2));
                      rez.push(' ');
                      rez.push(phoneStr.substring(2, 4));
                      rez.push(' ');
                      rez.push(phoneStr.substring(4,6));
                      rez.push(' ');
                      rez.push(phoneStr.substring(6,8));
                      rez.push(' ');
                      rez.push(phoneStr.substring(8));
                      return rez.join('');
                  case 'option-5':
                      rez = [];
                      rez.push('+61 ');
                      rez.push('');
                      rez.push(phoneStr.substring(0, 3));
                      rez.push(' ');
                      rez.push(' ');
                      rez.push(phoneStr.substring(3));
                      return rez.join('');
                  case 'option-6':
                      rez = [];
                      rez.push('+86 ');
                      rez.push('');
                      rez.push(phoneStr.substring(0, 3));
                      rez.push(' ');
                      rez.push(' ');
                      rez.push(phoneStr.substring(3));
                      return rez.join('');
                  case 'option-7':
                      rez = [];
                      rez.push('+56 ');
                      rez.push('');
                      rez.push(phoneStr.substring(0, 2));
                      rez.push(' ');
                      rez.push(' ');
                      rez.push(phoneStr.substring(2));
                      return rez.join('');
                  case 'option-8':
                      rez = [];
                      rez.push('+55 ');
                      rez.push('');
                      rez.push(phoneStr.substring(0, 2));
                      rez.push(' ');
                      rez.push(' ');
                      rez.push(phoneStr.substring(2));
                      return rez.join('');
                  case 'option-9':
                      rez = [];
                      rez.push('+39 ');
                      rez.push('');
                      rez.push(phoneStr.substring(0, 3));
                      rez.push(' ');
                      rez.push(' ');
                      rez.push(phoneStr.substring(3));
                      return rez.join('');
                  case 'option-10':
                      rez = [];
                      rez.push('+54 ');
                      rez.push('');
                      rez.push(phoneStr.substring(0, 4));
                      rez.push(' ');
                      rez.push(' ');
                      rez.push(phoneStr.substring(4));
                      return rez.join('');
              }
          }
          else {
              return 'Please enter a 10-digit number';
          }
      }
    }
})();