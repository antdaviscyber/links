// Shared settings for the public page and the admin panel.
// The publishable key is designed to be public. What it can do is limited by the database rules.
window.LINKS_CONFIG = {
  SUPABASE_URL: "https://bxhdyqodsryiqaikdvhu.supabase.co",
  SUPABASE_KEY: "sb_publishable_BHKcw5kmkOSLCdlUT6REwA_VtMFKa4_",

  // Shown only if the database can't be reached AND the visitor has no saved copy.
  // These never expire, so keep them to your permanent profiles.
  FALLBACK_LINKS: [
    { id: "fb1", title: "Instagram", url: "https://instagram.com/antdaviscyber", icon: "camera", section: "Follow" },
    { id: "fb2", title: "TikTok", url: "https://tiktok.com/@antdaviscyber", icon: "video", section: "Follow" },
    { id: "fb3", title: "YouTube", url: "https://youtube.com/@antdaviscyber", icon: "play", section: "Follow" },
    { id: "fb4", title: "LinkedIn", url: "https://linkedin.com/in/antdaviscyber", icon: "briefcase", section: "Follow" },
    { id: "fb5", title: "antdavis.com", url: "https://antdavis.com", icon: "globe", section: "More" }
  ]
};

// Simple line icons (drawn on a 24x24 grid). Keys are what you pick in the admin panel.
window.LINK_ICONS = {
  camera: '<rect x="3" y="6.5" width="18" height="13" rx="3"/><circle cx="12" cy="13" r="3.5"/><path d="M8.5 6.5L10 4h4l1.5 2.5"/>',
  video: '<rect x="3" y="8" width="18" height="12" rx="2"/><path d="M3 12h18M7 8L5 4M13 8l-2-4M19 8l-2-4"/>',
  play: '<rect x="2.5" y="5" width="19" height="14" rx="4"/><path d="M10 9l5 3-5 3z"/>',
  briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M3 13h18"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18"/>',
  tools: '<path d="M14.5 6.5a4 4 0 00-5 5l-6 6 3 3 6-6a4 4 0 005-5l-2.5 2.5-2.5-.5-.5-2.5z"/>',
  mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0014 0M12 18v3"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
  star: '<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
  newspaper: '<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 9h8M8 13h8M8 17h5"/>',
  link: '<path d="M10 14a4 4 0 005.7 0l3-3a4 4 0 00-5.7-5.7l-1 1M14 10a4 4 0 00-5.7 0l-3 3a4 4 0 005.7 5.7l1-1"/>'
};
