// next-sitemap.js

module.exports = {
    siteUrl: 'https://richadu.com', // Replace with your actual site URL
    generateRobotsTxt: true, // Generate a robots.txt file
    sitemapSize: 7000,
    changefreq: 'daily',
    priority: 0.7,
    exclude: ['/admin/*', '/drafts/*'], // Exclude any paths that should not be included
    // Additional configuration for granular sitemaps
    outDir: 'out', // Output directory for the sitemap
    transform: async (config, path) => {
        // Customize priority, changefreq, or other properties based on the path
        if (path === '/') {
            return {
                loc: path, // Use the original URL
                changefreq: 'weekly',
                priority: 0.8,
                lastmod: new Date().toISOString(),
            };
        }
        
        if (path.includes('/projects/')) {
            return {
                loc: path, // Use the original URL
                changefreq: 'weekly',
                priority: 0.8,
                lastmod: new Date().toISOString(),
            };
        }
        if (path.includes('/posts/')) {
            return {
                loc: path, // Use the original URL
                changefreq: 'daily',
                priority: 0.9,
                lastmod: new Date().toISOString(),
            };
        }
        return {
            loc: path,
            changefreq: 'daily',
            priority: 0.7,
            lastmod: new Date().toISOString(),
        };
    },
};
