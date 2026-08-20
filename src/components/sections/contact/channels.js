import { Phone } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '../../common/BrandIcons';
import { TONES } from '../../../lib/tones';
import { profile } from '../../../data/profile';

/* ============================================================================
 * CONTACT — SECONDARY CHANNELS
 * Email is the primary CTA and lives in its own card; these are the fallbacks.
 * `external` decides whether the link opens in a new tab.
 * ==========================================================================*/

export const SECONDARY_CHANNELS = [
    {
        label: 'GitHub',
        icon: GitHubIcon,
        href: profile.github,
        tone: TONES.violet,
        external: true,
    },
    {
        label: 'LinkedIn',
        icon: LinkedInIcon,
        href: profile.linkedin,
        tone: TONES.blue,
        external: true,
    },
    {
        label: 'Call',
        icon: Phone,
        href: `tel:${profile.phone}`,
        tone: TONES.cyan,
    },
];
