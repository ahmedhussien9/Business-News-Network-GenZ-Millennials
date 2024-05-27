import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default:
          'nx run Business-News-Network-GenZ-Millennials:serve:development',
        production:
          'nx run Business-News-Network-GenZ-Millennials:serve:production',
      },
      ciWebServerCommand:
        'nx run Business-News-Network-GenZ-Millennials:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
