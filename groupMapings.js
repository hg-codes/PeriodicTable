// groupMappings.js
import * as Selectors from './selectors.js';
import * as ContentUpdater from './contentUpdater.js';

export const groupMappings = {
  G1: { group: Selectors.G1, updateFn: ContentUpdater.updateContentForG1 },
  G2: { group: Selectors.G2, updateFn: ContentUpdater.updateContentForG2 },
  G3: { group: Selectors.G3, updateFn: ContentUpdater.updateContentForG3 },
  G4: { group: Selectors.G4, updateFn: ContentUpdater.updateContentForG4 },
  G5: { group: Selectors.G5, updateFn: ContentUpdater.updateContentForG5 },
  G6: { group: Selectors.G6, updateFn: ContentUpdater.updateContentForG6 },
  G7: { group: Selectors.G7, updateFn: ContentUpdater.updateContentForG7 },
  G8: { group: Selectors.G8, updateFn: ContentUpdater.updateContentForG8 },
  G9: { group: Selectors.G9, updateFn: ContentUpdater.updateContentForG9 },
  G10: { group: Selectors.G10, updateFn: ContentUpdater.updateContentForG10 },
  G11: { group: Selectors.G11, updateFn: ContentUpdater.updateContentForG11 },
  G12: { group: Selectors.G12, updateFn: ContentUpdater.updateContentForG12 },
  G13: { group: Selectors.G13, updateFn: ContentUpdater.updateContentForG13 },
  G14: { group: Selectors.G14, updateFn: ContentUpdater.updateContentForG14 },
  G15: { group: Selectors.G15, updateFn: ContentUpdater.updateContentForG15 },
  G16: { group: Selectors.G16, updateFn: ContentUpdater.updateContentForG16 },
  G17: { group: Selectors.G17, updateFn: ContentUpdater.updateContentForG17 },
  G18: { group: Selectors.G18, updateFn: ContentUpdater.updateContentForG18 },
  P1: { group: Selectors.P1, updateFn: ContentUpdater.updateContentForP1 },
  P2: { group: Selectors.P2, updateFn: ContentUpdater.updateContentForP2 },
  P3: { group: Selectors.P3, updateFn: ContentUpdater.updateContentForP3 },
  P4: { group: Selectors.P4, updateFn: ContentUpdater.updateContentForP4 },
  P5: { group: Selectors.P5, updateFn: ContentUpdater.updateContentForP5 },
  P6: { group: Selectors.P6, updateFn: ContentUpdater.updateContentForP6 },
  P7: { group: Selectors.P7, updateFn: ContentUpdater.updateContentForP7 },
    Planthanoid: { group: Selectors.lanthanoid, updateFn: ContentUpdater.updateContentForLanthanoid },
    PActinoid: { group: Selectors.actinoid, updateFn: ContentUpdater.updateContentForActinoid },
};