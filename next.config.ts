// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  
  turbopack: {
    root: __dirname, // fuerza a usar la raíz correcta
  },
  allowedDevOrigins: [
    'http://localhost:3000',
    'http://192.168.1.70:3000',
  ],
   experimental: {
    ppr: 'incremental'
  },
};

export default nextConfig;
