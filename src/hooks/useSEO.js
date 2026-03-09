import { useEffect } from 'react';

const BASE_TITLE = 'DisTechSol';

export default function useSEO({ title, description, canonical }) {
    useEffect(() => {
        // Title
        document.title = title ? `${title} | ${BASE_TITLE}` : `${BASE_TITLE} — Security, Automation & IT Infrastructure`;

        // Meta description
        if (description) {
            let meta = document.querySelector('meta[name="description"]');
            if (meta) meta.setAttribute('content', description);
        }

        // OG title
        let ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle && title) ogTitle.setAttribute('content', `${title} | ${BASE_TITLE}`);

        // OG description
        let ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc && description) ogDesc.setAttribute('content', description);

        // Canonical
        if (canonical) {
            let link = document.querySelector('link[rel="canonical"]');
            if (link) link.setAttribute('href', canonical);
        }
    }, [title, description, canonical]);
}
