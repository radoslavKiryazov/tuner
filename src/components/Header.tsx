const Header = () => {
    return (
        <header className="border-b border-white/10">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-3">
                <div className="min-w-0">
                    <h1 className="text-lg sm:text-xl font-semibold tracking-tight truncate">
                        TEXT
                    </h1>
                    <p className="text-xs sm:text-sm text-neutral-400">
                        TEXT
                    </p>
                </div>

                <span className="shrink-0 rounded-full border border-white/10 px-3 py-1 text-xs text-neutral-300">
                    Ready
                </span>
            </div>
        </header>
    )
}
export default Header