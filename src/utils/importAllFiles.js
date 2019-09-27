
// context = require.context('../assets/images/weaponTypes', false, /.png/
const importAllFiles = context => {
  let images = {};
  context.keys().map((item, index) => {
    images[item.replace('./', '')] = context(item);
  });
  return images;
}

export default importAllFiles;
