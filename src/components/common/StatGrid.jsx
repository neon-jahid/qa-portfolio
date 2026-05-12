export default function StatGrid({ stats }) {
    return (
        <div className='grid grid-cols-2 gap-2'>
            {stats.map((item) => (
                <div
                    key={item.label}
                    className='rounded-2xl border border-white/10 bg-white/5 p-4'>
                    <p className='text-xl font-bold text-cyan-300'>{item.value}</p>
                    <p className='text-sm text-slate-400'>{item.label}</p>
                </div>
            ))}
        </div>
    );
}
