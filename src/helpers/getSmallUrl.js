const getSmallUrl = (path, size) => {
  try {
    let newPath = "";
    const regex = new RegExp(/media\/screenshots/);

    if (regex.test(path)) {
      newPath = path.replace(regex, `media/resize/${size}/-/screenshots`);
    } else {
      newPath = path.replace(/media\/games/, `media/resize/${size}/-/games`);
    }

    return newPath;
  } catch (error) {
    return path;
  }
};

export default getSmallUrl;
