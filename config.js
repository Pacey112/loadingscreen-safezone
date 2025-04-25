// ignore
var Config = {};

/**
 * What should the text in the center of the screen be?
 * if empty it will fill in your Server Name
 */
Config.title = "Safezone Networks";

/**
 * Enable map text in the top left corner of the screen?
 */
Config.enableMap = true;

/**
 * Enable steamId text in the top right corner of the screen?
 */
Config.enableSteamID = true;

/**
 * Enable announcements?
 */
Config.enableAnnouncements = true;

/**
 * What messages do you want to show up?
 * only works if enableAnnouncements = true
 */
Config.announceMessages = [
  "Welcome to Safezone Networks!",
  "Join our Discord to stay updated!",
  "Respect the rules and your fellow players.",
  "Need help? Ask staff via Discord.",
  "Don’t forget to favorite the server!",
  "Thanks for choosing Safezone Community!"
];


/**
 * How many miliseconds for each announcement?
 * only works if enableAnnouncements = true
 */
Config.announcementLength = 3000;

/**
 * Image Filename
 * DROP IMAGE IN "images" FOLDER
 */
Config.backgroundImage = "loadingscreen.jpg";

/**
 * Enable debug messages?
 */
Config.enableDebug = false;
