const path = require('path');
const getAllFiles = require('../utils/getAllFiles');

module.exports = (client) => {
    const eventFolders = getAllFiles(path.join(__dirname, '..', 'events'), true);
    console.log(eventFolders);

    // Iterate over the event folders
    for (const eventFolder of eventFolders) {       
        const eventFiles = getAllFiles(eventFolder);
        eventFiles.sort((a,b)=> a > b);
        console.log(eventFiles);



        const eventName = eventFolder.replace(/\\/g, '/').split('/').pop();

        // Use 'client.on' instead of 'Client.on'
        client.on(eventName, async (arg) => {
            for (const eventFile of eventFiles) {
                const eventFunction = require(eventFile);
                await eventFunction(client, arg);
            }
        });
    }
};
