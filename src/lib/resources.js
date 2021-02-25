const BUNDLED_BASE_URL = '/images';
const CDN_BASE_URL = 'https://steamcdn-a.akamaihd.net/apps/dota2/images';

export const abilityResourceFor = (refname) => (
  // Example: http://steamcdn-a.akamaihd.net/apps/dota2/images/abilities/winter_wyvern_winters_curse_md.png
  `${CDN_BASE_URL}/abilities/${refname}_md.png`
);

export const heroResourceFor = (refname, variant) => {
  let suffix = 'full.png';
  switch (variant) {
    case 'portrait':
      // Example: https://steamcdn-a.akamaihd.net/apps/dota2/images/heroes/phoenix_vert.jpg
      suffix = 'vert.jpg';
      break;
    case 'landscape':
      // Example: https://steamcdn-a.akamaihd.net/apps/dota2/images/heroes/oracle_sb.png
      suffix = 'sb.png';
      break;
    case 'icon':
      // Example: https://steamcdn-a.akamaihd.net/apps/dota2/images/heroes/shadow_shaman_icon.png
      suffix = 'icon.png';
      break;
    default:
      // Example: https://steamcdn-a.akamaihd.net/apps/dota2/images/heroes/jakiro_full.png
      suffix = 'full.png';
      break;
  }
  const heroname = refname.replace('npc_dota_hero_', '');
  return `${CDN_BASE_URL}/heroes/${heroname}_${suffix}`;
};

export const itemResourceFor = (refname) => {
  // Example: https://steamcdn-a.akamaihd.net/apps/dota2/images/items/blink_lg.png
  let itemname = refname.replace('item_', '');
  // TODO: Overrides should preferably not be in the UI
  if (itemname.startsWith('recipe_')) {
    itemname = 'recipe';
  }
  return `${CDN_BASE_URL}/items/${itemname}_lg.png`;
};

export const teamLogoResourceFor = (teamID) => (
  // Example: https://steamcdn-a.akamaihd.net/apps/dota2/images/team_logos/36.png
  `${CDN_BASE_URL}/team_logos/${teamID}.png`
);

export const unitResourceFor = (refname, variant) => {
  switch (variant) {
    case 'portrait':
      // Example: /images/portraits/npc_dota_roshan.jpg
      return `${BUNDLED_BASE_URL}/portraits/${refname}.jpg`;
    case 'icon':
      // Example: /images/icons/npc_dota_lone_druid_bear.png
      return `${BUNDLED_BASE_URL}/icons/${refname}.png`;
    default:
      return null;
  }
};
