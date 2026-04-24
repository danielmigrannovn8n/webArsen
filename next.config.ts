import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  
  // 1. Это самое важное: basePath заставляет пути со слэшем работать
  // Он превратит "/image.jpg" в "/webArsen/image.jpg" автоматически
  basePath: '/webArsen',
  
  // 2. Обязательно для статического хостинга GitHub Pages
  output: 'export', 

  images: {
    // 3. Отключаем оптимизацию, так как на GitHub нет сервера для этого
    unoptimized: true, 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**', 
      },
    ],
  },
  
  transpilePackages: ['motion'],
  webpack: (config, {dev}) => {
    if (dev && process.env.DISABLE_HMR === 'true') {
      config.watchOptions = {
        ignored: /.*/,
      };
    }
    return config;
  },
};

export default nextConfig;
