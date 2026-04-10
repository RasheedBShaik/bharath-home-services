// utils/videoHelpers.ts

export const getVideoAssets = (platform: 'youtube' | 'instagram', link: string) => {
  if (platform === 'youtube') {
    const vId = link.split('v=')[1]?.split('&')[0];
    return {
      thumb: `https://img.youtube.com/vi/${vId}/maxresdefault.jpg`,
      embed: `https://www.youtube.com/embed/${vId}?autoplay=1`,
    };
  }

  if (platform === 'instagram') {
    // 1. Standardize the link (remove query params and trailing slashes)
    const baseUrl = link.split('?')[0].replace(/\/$/, ""); 
    
    return {
      // PRO TIP: Adding /media/?size=l is the official "unofficial" way,
      // but it requires the post to be Public and not age-restricted.
      thumb: `${baseUrl}/media/?size=l`,
      
      // We add /embed/ to the URL for the iframe
      embed: `${baseUrl}/embed/`
    };
  }

  return { thumb: '', embed: '' };
};