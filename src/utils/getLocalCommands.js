const path = require('path');
const getAllFiles = require('./getAllFiles');

module.exports = (exceptions = []) => {
  let localCommands = [];

  // Komut kategorilerini al
  const commandCategories = getAllFiles(
    path.join(__dirname, '..', 'commands'),
    true
  );

  // Her komut kategorisi için döngü
  for (const commandCategory of commandCategories) {
    // Kategorideki komut dosyalarını al
    const commandFiles = getAllFiles(commandCategory);

    // Her bir komut dosyasını işle
    for (const commandFile of commandFiles) {
      const commandObject = require(commandFile);

      // Eğer istisnalar arasındaysa devam et
      if (exceptions.includes(commandObject.name)) {
        continue;
      }

      // Komut nesnesini ekle
      console.log(commandObject);
      localCommands.push(commandObject);
    }
  }

  return localCommands; // Komutları döndür
};
