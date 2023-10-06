const today = new Date();
const futureDate = new Date('December 31, 2023');

const timeDifference = futureDate - today;
const daysRemining = Math.ceil(timeDifference/ (100 * 60 *60 * 24));

console.log("Days remaining : " , daysRemining);