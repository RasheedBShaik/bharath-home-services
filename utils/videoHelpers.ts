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
    // Clean the URL
    const cleanLink = link.split('?')[0].replace(/\/$/, ""); 
    
    return {
      /* Adding /media/ as a path rather than a query parameter 
         tends to work better across different regions.
      */
      thumb: `${cleanLink}/media/?size=l`,
      embed: `${cleanLink}/embed/`
    };
  }

  return { thumb: '', embed: '' };
};