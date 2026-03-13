export default function Loading() {
    return (
        <section className="grid grid-cols-5 container">
            <h1 className="text-5xl text-center font-bold text-gray-800 my-16"> 
                <div role="status" className="max-w-sm animate-pulse">
                    <div className="h-2.5 bg-neutral-quaternary rounded-full w-48 mb-4"></div>
                    <div className="h-2 bg-neutral-quaternary rounded-full max-w-[360px] mb-2.5"></div>
                    <div className="h-2 bg-neutral-quaternary rounded-full mb-2.5"></div>
                    <div className="h-2 bg-neutral-quaternary rounded-full max-w-[330px] mb-2.5"></div>
                    <div className="h-2 bg-neutral-quaternary rounded-full max-w-[300px] mb-2.5"></div>
                    <div className="h-2 bg-neutral-quaternary rounded-full max-w-[360px]"></div>
                    <span className="sr-only">Loading...</span>
                </div>
            </h1>
        </section>
    )
}