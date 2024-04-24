/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    domains: ['localhost', '127.0.0.1'],
  }, 
  webpack: (config) => {
    config.externals.push({
      "utf-8-validate": "commonjs utf-8-validate",
      bufferutil: "commonjs bufferutil",
      canvas: "commonjs canvas",
    });
    // config.infrastructureLogging = { debug: /PackFileCache/ };
    return config;
  },
};
