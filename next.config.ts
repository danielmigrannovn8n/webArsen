import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  
  // 1. Указываем статический экспорт для GitHub Pages
  output: 'export', 
  
  // 2. Указываем папку репозитория, чтобы пути к картинкам строились правильно
  basePath: '/webArsen', 

  images: {
    // 3. Глобально отключаем оптимизацию (Github Pages её не поддерживает)
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
