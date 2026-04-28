import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';

// Read the info.js file to extract the name variable without importing it directly
const infoContent = fs.readFileSync('./src/store/info.js', 'utf-8');
const nameMatch = infoContent.match(/export const name\s*=\s*['"]([^'"]+)['"]/);
const firstName = nameMatch ? nameMatch[1].split(' ')[0] : 'Portfolio';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'html-transform',
      transformIndexHtml(html) {
        // Replace the <title> tag content with the first name from info.js
        return html.replace(/<title>(.*?)<\/title>/, `<title>${firstName}</title>`);
      },
    },
  ],
});