import { Building2, MapPin } from 'lucide-react';

/* ============================================================================
 * WORK — EXPERIENCE CARD HEADER
 * Role, company and location on the left; the period chip on the right. The
 * chip carries a pinging dot because this role is current.
 * ==========================================================================*/

export default function ExperienceHeader({ job, tone }) {
    return (
        <div className='mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-start'>
            <div className='flex items-start gap-4'>
                <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border ${tone.tile}`}>
                    <Building2 size={22} />
                </span>

                <div>
                    <h3 className='text-xl font-bold text-heading sm:text-2xl'>{job.title}</h3>
                    <p className={`mt-1 font-semibold ${tone.text}`}>{job.company}</p>
                    <p className='mt-1 inline-flex items-center gap-1.5 text-sm text-muted'>
                        <MapPin size={14} /> {job.location}
                    </p>
                </div>
            </div>

            <span className={`inline-flex h-fit shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold ${tone.chip}`}>
                <span className='relative flex h-2 w-2'>
                    <span className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-70 ${tone.bar}`} />
                    <span className={`relative inline-flex h-2 w-2 rounded-full ${tone.bar}`} />
                </span>
                {job.period}
            </span>
        </div>
    );
}
