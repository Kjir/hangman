angular.module('rn.hangman')
  .controller('HomeController', function() {
    var vm = this;
    vm.checkLetter = checkLetter;
    vm.getHangman = getHangman;
    vm.score = 0;
    vm.errors = 0;
    vm.currentWord = 'HELLO';
    vm.guessedLetters = [];
    vm.hangmanLines = [

      '    ___________\n',
      '    |         |\n',
      '    |         0\n',
      '    |        /|\\\n',
      '    |        / \\\n',
      '    |\n',
      '    |'
    ];

    function checkLetter() {
      var letterIndex = vm.currentWord.indexOf(vm.letter.toUpperCase());
      if (letterIndex !== -1) {
        vm.score += 1;
        vm.guessedLetters[letterIndex] = vm.letter;
      } else {
        vm.errors += 1;
      }
      vm.letter = '';
    }

    function getHangman() {
      var hangman = '';
      for(var i = 0; i < vm.errors; i++) {
        hangman += vm.hangmanLines[i];
      }
      return hangman;
    }
  });
