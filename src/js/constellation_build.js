import Constellation from "./constellation/constellation";
import CreateConstellation from "./constellation/create_constellation";

window.initConstellation = function (tagId, artboard) {
  return new Constellation(tagId, artboard);
};

window.initCreateConstellation = function (tagId, artboard) {
  return new CreateConstellation(tagId, artboard);
};