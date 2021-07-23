import Constellation from "./constellation/constellation";
import { notFoundArtboard } from './constellation/artboard';

window.addEventListener('DOMContentLoaded', () => {
  const constellation = new Constellation('my-canvas', notFoundArtboard);
  constellation.changeMouseMode('coalesce');
});