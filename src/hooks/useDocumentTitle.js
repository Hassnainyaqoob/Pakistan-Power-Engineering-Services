// src/hooks/useDocumentTitle.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SITE_URL, DEFAULT_ROBOTS, routeSeoMap, CANONICAL_ALIASES } from '../data/routeSeoMap';

export { SITE_URL, DEFAULT_ROBOTS, routeSeoMap, CANONICAL_ALIASES };

const useDocumentTitle = () => {
    const location = useLocation();

    useEffect(() => {
        const rawPath = location.pathname || '/';
        const normalizedPath = rawPath.length > 1 ? rawPath.replace(/\/+$/, '') : '/';
        const canonicalPath = CANONICAL_ALIASES[normalizedPath] || normalizedPath;
        const matchedSeo = routeSeoMap[canonicalPath];
        const isKnownRoute = Boolean(matchedSeo);

        const seoData = matchedSeo || {
            title: 'Page Not Found | Pakistan Power Engineering Services',
            description: 'The requested page could not be found on Pakistan Power Engineering Services.'
        };
        const canonicalUrl = `${SITE_URL}${canonicalPath === '/' ? '/' : canonicalPath}`;

        document.title = seoData.title;

        const updateMeta = (selector, attrName, content) => {
            const el = document.querySelector(selector);
            if (el) {
                el.setAttribute(attrName, content);
            }
        };

        updateMeta('meta[name="description"]', 'content', seoData.description);
        updateMeta('meta[name="robots"]', 'content', isKnownRoute ? DEFAULT_ROBOTS : 'noindex, follow');
        updateMeta('meta[property="og:title"]', 'content', seoData.title);
        updateMeta('meta[property="og:description"]', 'content', seoData.description);
        updateMeta('meta[property="og:url"]', 'content', canonicalUrl);
        updateMeta('meta[name="twitter:title"]', 'content', seoData.title);
        updateMeta('meta[name="twitter:description"]', 'content', seoData.description);

        let canonicalLink = document.querySelector('link[rel="canonical"]');
        if (!canonicalLink) {
            canonicalLink = document.createElement('link');
            canonicalLink.setAttribute('rel', 'canonical');
            document.head.appendChild(canonicalLink);
        }
        canonicalLink.setAttribute('href', canonicalUrl);
    }, [location.pathname]);
};

export default useDocumentTitle;
