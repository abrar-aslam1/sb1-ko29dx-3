import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://bizsecurity.io',
  server: {
    port: 4000
  },
  integrations: [
    sitemap({
      customPages: [
        'https://bizsecurity.io/blog/5-essential-cybersecurity-tips',
        'https://bizsecurity.io/blog/importance-of-employee-training',
        'https://bizsecurity.io/blog/create-disaster-recovery-plan',
        'https://bizsecurity.io/blog/understanding-multi-factor-authentication',
        'https://bizsecurity.io/blog/role-of-firewalls',
        'https://bizsecurity.io/pillars/network-security',
        'https://bizsecurity.io/pillars/data-protection',
        'https://bizsecurity.io/pillars/physical-security',
        'https://bizsecurity.io/pillars/employee-security-awareness',
        'https://bizsecurity.io/pillars/incident-response-recovery',
        'https://bizsecurity.io/pillars/data-protection/backup-strategies',
        'https://bizsecurity.io/pillars/network-security/wireless-security',
        'https://bizsecurity.io/pillars/physical-security/security-awareness-training',
        'https://bizsecurity.io/pillars/employee-security-awareness/phishing-prevention',
        'https://bizsecurity.io/pillars/incident-response-recovery/business-continuity-planning',
      ],
    }),
  ],
  output: 'static',  // Ensure static output for Netlify
});