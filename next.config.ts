import type { NextConfig } from 'next';

import path from 'node:path';

const nextConfig: NextConfig = {
  webpack: config => {
    config.resolve.alias['@styles'] = path.resolve(__dirname, 'styles');
    return config;
  },
  sassOptions: {
    prependData: `
    @use "styles/utility/mixins.scss" as *;
    @use "styles/utility/functions.scss" as *;
    `,
  },
  output: 'export',
  trailingSlash: true,
};

export default nextConfig;
