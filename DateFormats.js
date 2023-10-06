// Time Formats
const eventTime = new Date('2023-10-15T18:30:00');

const timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
const timeFormat = eventTime.toLocaleTimeString('en-US', timeOptions);

console.log("Time Format:", timeFormat);
