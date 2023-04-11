//1
function containsAllLetters(str) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const lowercaseStr = str.toLowerCase();
  for (let i = 0; i < alphabet.length; i++) {
    if (lowercaseStr.indexOf(alphabet[i]) === -1) {
      return false;
    }
  }
  return true;
}

//2

function getLongerWords(sentence) {
  const words = sentence.replace(/,/g, '').split(' ');
  const averageLength = words.reduce((total, word) => total + word.length, 0) / words.length;
  const longerWords = words.filter(word => word.length > averageLength);
  return longerWords;
}

//3

const User = {
  email: '',
  getAdminEmail() {
    return 'admin@gmail.com';
  }
};

const VerifiedUser = {
  __proto__: User,
};

const Guest = {
  __proto__: User,
  registerToDatabase() {
    console.log('Register to database');
  }
};

const Database = {
  __proto__: User,
  password: 'password'
};