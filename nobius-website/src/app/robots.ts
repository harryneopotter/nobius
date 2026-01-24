import { MetadataRoute } from 'next';

const BASE_URL = 'https://nobius.bluepanda.cloud';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/private/', '/admin/'],
        },
        sitemap: `${BASE_URL}/sitemap.xml`,
    };
}
