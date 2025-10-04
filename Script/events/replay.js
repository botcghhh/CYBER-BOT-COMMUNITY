module.exports.config = {
  name: "reply",
  eventType: [],
  version: "1.0.0",
  credits: "Your Name",
  description: "General message reply"
};

module.exports.run = async({ event, api }) => {
  const content = event.body ? event.body.toLowerCase() : "";

  if (content === "bot") {
    api.sendMessage("হাই! আমি ঠিকঠাক কাজ করছি 🤖", event.threadID, event.messageID);
  }

  if (content === "/admin") {
    api.sendMessage("অ্যাডমিন এখানে হাজির 😎", event.threadID, event.messageID);
  }
};
