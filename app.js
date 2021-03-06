const nums = [2, 4, 6];
const sumNum = (input) => {
  const out = input.reduce((acc, currentVal) => {
    return acc + currentVal;
  }, 0);
  return out;
};
// console.log(sumNum(nums))
////////////

const srtMatch = (inp, reg) => {
  return inp.includes(reg);
};
// console.log(srtMatch('hi','hi'))
///////////////////////

const eqSt = (st1, st2) => (st1 === st2 ? true : false);
// console.log(eqSt('his','hi'))
//////////////////////

const initial = (inp) => {
  return inp
    .split(' ')
    .map((n) => n[0])
    .join(' ');
};
// console.log(initial('Ben Maudslay'))
///////////////////////

const evenOdd = (mixed) => {
  let even = [];
  let odd = [];
  for (let mix of mixed) {
    mix % 2 === 0 ? even.push(mix) : odd.push(mix);
  }
  return `\n odds=[${odd}] \n even=[${even}]`;
};
let arr = [1, 3, 12, 15, 44, 41];
// console.log(evenOdd(arr))
/////////////////

const sentCount = (sent) => {
  let vowel_list = 'aeiouAEIOU';
  let vowel = 0;
  let consonant = 0;
  let out = {};
  for (let sne of sent)
    vowel_list.indexOf(sne) !== -1 ? (vowel += 1) : (consonant += 1);
  out = {
    length: sent.length,
    vowels: vowel,
    consonant: consonant,
  };
  return out;
};
console.log(sentCount('hello code nation'));
