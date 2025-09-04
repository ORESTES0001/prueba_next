// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  
  turbopack: {
    root: __dirname, // fuerza a usar la raíz correcta
  },

   experimental: {
    ppr: 'incremental'
  },
};

export default nextConfig;
