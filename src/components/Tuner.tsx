import { useMicrophone } from "../hooks/useMicrophone";

const Tuner = () => {
    const { requestMicrophonePermission } = useMicrophone();

    return (<main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div className="grid gap-4 sm:gap-6">
            <section className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-6">
                <h2 className="text-base sm:text-lg font-medium">microphone innit</h2>
                <p className="mt-2 text-sm sm:text-base text-neutral-300 max-w-prose">
                    request mic permission.
                </p>

                <div className="mt-4 flex flex-col sm:flex-row gap-3">
                    <button
                        className="w-full sm:w-auto rounded-xl bg-white text-neutral-900 px-4 py-2 text-sm font-medium hover:opacity-90 active:opacity-80"
                        onClick={() => requestMicrophonePermission()}
                    >
                        Start
                    </button>
                    <button
                        className="w-full sm:w-auto rounded-xl border border-white/15 px-4 py-2 text-sm font-medium text-white hover:bg-white/5"
                    >
                        Stop
                    </button>
                </div>
            </section>

            <section className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-6">
                <h2 className="text-base sm:text-lg font-medium"> something here</h2>
                <p className="mt-2 text-sm sm:text-base text-neutral-300 max-w-prose">
                    something here, tuner I guess
                </p>
            </section>
        </div>
    </main>
    )
}
export default Tuner;