const ContactInformationSkeleton = () => {
    const pulseStyle = { animationDuration: '1s' }
    const skeletonClass = 'animate-pulse rounded bg-muted'

    return (
        <div className="p-4" aria-busy="true" aria-label="Cargando información de contacto">
            <div className="flex flex-col items-center border-b pb-6">
                <div className={`${skeletonClass} h-20 w-20 rounded-full`} style={pulseStyle} />
                <div className={`${skeletonClass} mt-3 h-5 w-32`} style={pulseStyle} />
                <div className={`${skeletonClass} mt-2 h-4 w-24`} style={pulseStyle} />
                <div className="mt-2 flex items-center gap-2">
                    <div className={`${skeletonClass} h-2 w-2 rounded-full`} style={pulseStyle} />
                    <div className={`${skeletonClass} h-3 w-12`} style={pulseStyle} />
                </div>
            </div>

            <div className="space-y-4 py-4">
                <div>
                    <div className={`${skeletonClass} mb-3 h-4 w-36`} style={pulseStyle} />
                    <div className="space-y-3">
                        {[0, 1, 2].map((item) => (
                            <div key={item} className="flex justify-between gap-4">
                                <div className={`${skeletonClass} h-4 w-20`} style={pulseStyle} />
                                <div className={`${skeletonClass} h-4 w-28`} style={pulseStyle} />
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <div className={`${skeletonClass} mb-3 h-4 w-28`} style={pulseStyle} />
                    <div className="space-y-3">
                        {[0, 1, 2].map((item) => (
                            <div key={item} className="flex justify-between gap-4">
                                <div className={`${skeletonClass} h-4 w-24`} style={pulseStyle} />
                                <div className={`${skeletonClass} h-4 w-20`} style={pulseStyle} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="border-t pt-4">
                <div className={`${skeletonClass} h-9 w-full rounded-md`} style={pulseStyle} />
            </div>
        </div>
    )
}

export default ContactInformationSkeleton

