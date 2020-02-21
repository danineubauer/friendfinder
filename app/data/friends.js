//applicant data in an array:

var friendsArray = [
    {
      name: "Dana",
      photo: " ",
      scores: [
         5,
         1,
         4,
         4,
         5,
         1,
         2,
         5,
         4,
         1
      ]
    }
  ];
  
//export array:
module.exports = friendsArray;
  

//Convert user's results into an array of numbers [1,2,3]

//compare the difference between current user's scores and those from other users, question by question. 

//add up differences to calculate the 'totalDifference'

//Example:
       //* User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
       //* User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
       //* Total Difference: **2 + 1 + 2 =** **_5_**
   //* Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on.
   //* The closest match will be the user with the least amount of difference.

   // The best match is the user with the least differnces

   