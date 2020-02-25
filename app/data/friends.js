//applicant data in an array:

const friends = [
  {
    name: 'Audrey Hepburn',
    photo: 'https://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/gettyimages-3171980.jpg?itok=BroQozLs&resize=1100x1100',
    scores: ['3', '2', '3', '4', '3', '4', '3', '2', '4', '2']
  },
  {
    name: 'Dean Martin',
    photo: 'http://www.gstatic.com/tv/thumb/persons/15924/15924_v9_ba.jpg',
    scores: ['3', '5', '4', '5', '3', '5', '4', '5', '5', '5']
},
{
    name: 'Sylvester Stallone',
    photo: 'https://dils4you.files.wordpress.com/2015/05/sylvester-stallon-image.jpeg',
    scores: ['1', '2', '1', '2', '2', '1', '1', '2', '1', '1']
},
{
    name: 'Jane Fonda',
    photo: 'https://i.dailymail.co.uk/i/pix/2014/12/06/00D1827900000190-2863327-image-m-69_1417869401125.jpg',
    scores: ['2', '4', '3', '1', '5', '2', '3', '5', '5', '2']
}
];
  

module.exports = friends;
  

// let matchMaker = () => {
//   let lastFriend = friends.slice(-1)
//   const calcOne = [];
//   let addition = 0;
//   const calcTwo = [];
//   for (i = 0; i < friends.length - 1; i++) {
//     for (t = 0; t < friends[i].scores.length; t++) {
//       calcOne.push(Math.abs(parseInt(friends[i].scores[t]) - parseInt(lastFriend[0].scores[t])));
//     };
//     for (x = 0; x < calcOne.length; x++) {
//       addition += calcOne[x];
//     };
//     calcTwo.push(addition);
//     calcOne.length = 0;
//     addition = 0;
//   };
//   let minIndex = calcTwo.indexOf(Math.min(...calcTwo));
//   const match = [{ name: friends[minIndex].name, photo: friends[minIndex].photo }];
//   calcTwo.length = 0;
//   return match;
// };

// module.exports = {
//   friends,
//   matchMaker
// };
