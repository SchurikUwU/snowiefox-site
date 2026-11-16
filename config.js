/*
	site text, links and stuff
*/

window.SNOWIE_CONFIG = {
  // me
  name: "Schurik",
  handle: "@schurik",
  pronouns: "he/him",
  location: "DE",
  tagline: "I make Roblox games under FrostPaw Interactive",
  status: "online",

  // work with me page
  work: {
    title: "work with me",
    subtitle: "Roblox scripting commissions",
    status: "commissions: ask me",
    take: ["smaller game systems", "admin / moderation tools", "fixing or cleaning up scripts"],
    bigger: "bigger projects: ask me first",
    made: ["custom chat system", "Snowie-Guard (admin system)", "custom physics engine"],
    price: "price depends on the job. tell me what you need and I'll give you a quote.",
    buttons: [
      { label: "request on Ko-fi", url: "https://ko-fi.com/SchurikOwO/commissions" },
      { label: "questions? Telegram", url: "https://t.me/schurikuwu" }
    ]
  },

  // start screen lines (hiring + telegram)
  notice: {
    hiring: "looking for a map layout designer for URC",
    hiringButton: "apply",
    contact: "wanna msg me? use Telegram, not Discord",
    button: "telegram",
    url: "https://t.me/schurikuwu"
  },

  // links and stuff (empty url = hidden)
  links: [
    { label: "discord",     url: "https://discord.gg/PwnmN4z4X4",                         color: "#5b6ef2" },
    { label: "furaffinity", url: "https://www.furaffinity.net/user/SchurikUwU",           color: "#3fd6c4" },
    { label: "twitch",      url: "https://twitch.tv/SchurikOwO",                          color: "#a98bff" },
    { label: "youtube",     url: "https://youtube.com/@schurikowo",                       color: "#ff6a6a" },
    { label: "ko-fi",       url: "https://ko-fi.com/SchurikOwO",                          color: "#ff8aa0" },
    { label: "toyhouse",    url: "",                                                      color: "#ffcf9e" },
    { label: "steam",       url: "https://steamcommunity.com/id/SchurikUwU",              color: "#6a8aff" },
    { label: "instagram",   url: "https://instagram.com/SchurikUwU",                      color: "#e08ad0" },
    { label: "telegram",    url: "https://t.me/schurikuwu",                               color: "#5ab8e8" },
    { label: "spotify",     url: "https://open.spotify.com/search/Scientello%20Mefjus",   color: "#7fe0a0" },
    { label: "xbox",        url: "https://account.xbox.com/en-us/Profile?Gamertag=RecentBycicle41", color: "#8fd07a" }
  ],

  // music, mp3s in assets/music (empty = synth loop)
  music: [],

  // sketchbook drawings, in assets/drawings
  sketchbook: [],

  // about me
  about: [
    "German Fox",
    "If I'm not on Roblox I'm prob drawing or just relaxin",
    "I like horror stuff alot"
  ],

  // all the other text (\n = new line)
  text: {
    // start screen
    enterTitle: "PRESS TO ENTER THE CABIN",
    enterSub: "sound on \u00b7 headphones recommended",
    liteLink: "just here for the links? open the lightweight version \u2192",
    liteBack: "\u2190 enter the cabin instead",

    // room
    prompt: "click the computer",
    hintDesktop: "look around \u00b7 click things",
    hintTouch: "drag to look \u00b7 tap things",
    sliderLeft: "TONIGHT",
    sliderRight: "YEARS LATER",
    labels: { radio: "radio", screenOff: "power on", screenOn: "open", note: "read", radioOn: "turn on", radioOff: "turn off", fire: "stoke", fox: "pet", slug: "pet", plush: "squeeze", book: "sketchbook", bookNext: "next", bookPrev: "back", play: "play", stop: "stop", window: "look outside" },

    // computer
    bootTitle: "SNOWIE_OS",
    bootSub: "v4.1  //  FrostPaw Interactive",
    bootLines: [
      "> memory test .......... 640K ok",
      "> keyboard ............. ok",
      "> drive C: ............. ok",
      "> mounting /void ...... ??",
      "> 1 unread note"
    ],
    login: "schurik",
    welcome: "WELCOME BACK, schurik",
    welcomeSub: "last login: yesterday",
    welcomeSubLate: "last login: 2,191 days ago",
    idleLines: ["SNOWIE_OS v4.1", "last login: 2,191 days ago", "battery: ??", ""],
    footer: "SNOWIE_OS v4.1  \u00b7  FrostPaw Interactive",
    readme: ["SNOWIE_OS v4.1", "type help for commands."],

    // notes on the wall (years later)
    fragments: [
      "day 12\nsnow is up to the second log outside. wood for maybe four more days if i stop wasting it.\nthe fox sleeps by the fire. the little white one sleeps on the fox.",
      "day 19\nonly tape left for the boombox is the scientello one. playing it slow so it lasts longer.\nradio did the numbers again at 3:14. 4 7 2. same as tuesday.",
      "day 31\npower has been out for a week. the computer still turns on.\ni dont know what its running on and im not opening it.",
      "day 40\nthe tower light came back on last night. nobody is out there to fix it.\nleaving tomorrow with the fox and the little one. if you find this, check the computer. type void."
    ],
    allFound: "> 4 of 4 notes. check the computer.",
    signalFull: "> the radio is louder over here.",
    signalPartial: "> something out there is still transmitting.",
    voidLocked: "/void locked",
    voidLines: [
      "LOG 41",
      "",
      "left at first light. took the fox and the little one.",
      "the fire wont last but this thing will.",
      "the links still work. somebody should use them.",
      "",
      "see you when it stops snowing.",
      "  - s"
    ],

    // radio + sketchbook
    radioNumbers: "four. seven. two. ... four. seven. two. ... three. one. four.",
    lateHint: "turn the radio off to go back",
    radioHelp: "body: power \u00b7 left knob: band \u00b7 right knob: station \u00b7 scroll: tune",
    radioHelpTouch: "tap body: power \u00b7 knobs: band / station \u00b7 drag: tune",
    bookEmpty: "nothing here yet\ngonna add more soon",
    bookHelp: "click a page to flip",
    bookHelpTouch: "tap a page to flip"
  }
};
