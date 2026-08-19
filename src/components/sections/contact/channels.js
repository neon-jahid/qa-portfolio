import { Phone } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '../../common/BrandIcons';
import { TONES } from '../../../lib/tones';
import { portfolio } from '../../../data/portfolioData';

/* ============================================================================
 * CONTACT — SECONDARY CHANNELS
 * Email is the primary CTA and lives in its own card; these are the fallbacks.
 * `external` decides whether the link opens in a new tab.
 * ==========================================================================*/

export const SECONDARY_CHANNELS = [
    {
        label: 'GitHub',
        icon: GitHubIcon,
        href: portfolio.github,
        tone: TONES.violet,
        external: true,
    },
    {
        label: 'LinkedIn',
        icon: LinkedInIcon,
        href: portfolio.linkedin,
        tone: TONES.blue,
        external: true,
    },
    {
        label: 'Call',
        icon: Phone,
        href: `tel:${portfolio.phone}`,
        tone: TONES.cyan,
    },
];
