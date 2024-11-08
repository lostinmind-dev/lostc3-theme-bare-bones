import type { LostConfig } from "jsr:@lost-c3/lib@2.0.0";

const Config: LostConfig<'theme'> = {
    Type: 'theme',

    AddonId: 'Lost_MyTheme',
    AddonName: 'Lost Theme',
    AddonDescription: 'Amazing theme made with Lost.',
    Version: '1.0.0.0',
    Author: 'lostinmind.',
    WebsiteURL: `https://addon.com`,
    DocsURL: `https://docs.addon.com`,
};

export default Config;