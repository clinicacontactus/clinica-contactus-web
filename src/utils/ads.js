export const reportWhatsAppConversion = (url) => {
  if (window.gtag) {
    window.gtag('event', 'conversion', {
  
      send_to: "AW-17045311975/A8K9CK79oM4aEOej678_",

      event_callback: () => {
        window.open(url, '_blank');
      },
    });
  } else {
    window.open(url, '_blank');
  }
};
