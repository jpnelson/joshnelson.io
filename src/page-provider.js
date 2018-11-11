import contentful from "contentful";
const client = contentful.createClient({
  space: "n40oflihqkan",
  accessToken:
    "e4625dbdfab0c954b296c95ec36d8f6fc7427dc99c7478fe000ec4eca572ca97"
});

function entriesToPages(entries) {
  return entries.items.map(entry => {
    return {
      id: entry.fields.id,
      description: entry.fields.description,
      body: entry.fields.body,
      externalLink: entry.fields.externalLink,
      title: entry.fields.title,
      weight: entry.fields.weight,
      image: {
        title: entry.fields.image.fields.title,
        url: entry.fields.image.fields.file.url
      }
    };
  });
}

export default () => {
  let cachedEntries;
  return cb => {
    if (cachedEntries) {
      cb(entriesToPages(cachedEntries));
      return;
    }
    client.getEntries().then(entries => {
      cachedEntries = entries;
      cb(entriesToPages(entries));
    });
  };
};
