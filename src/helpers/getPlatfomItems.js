//IMAGES
import playstation from "../assets/img/playstation.svg";
import apple from "../assets/img/apple.svg";
import steam from "../assets/img/steam.svg";
import nintendo from "../assets/img/nintendo.svg";
import xbox from "../assets/img/xbox.svg";
import gamepad from "../assets/img/gamepad.svg";

const getPlatfomItems = (platforms) => {
  const splitItmes = platforms.reduce((acc, el) => {
    acc.push(el.platform.name.split(" ")[0]);
    return acc;
  }, []);

  return [...new Set(splitItmes)].map((el) => {
    const config = {};
    switch (el) {
      case "PlayStation":
        config.name = "PlayStation";
        config.src = playstation;
        break;
      case "IOS":
        config.name = "IOS";
        config.src = apple;
        break;
      case "Xbox":
        config.name = "Xbox";
        config.src = xbox;
        break;
      case "PC":
        config.name = "PC";
        config.src = steam;
        break;
      case "Nintendo":
        config.name = "Nintendo";
        config.src = nintendo;
        break;
      default:
        config.name = "default";
        config.src = gamepad;
    }
    return config;
  });
};

export default getPlatfomItems;
