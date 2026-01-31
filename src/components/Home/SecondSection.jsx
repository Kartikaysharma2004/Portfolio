const SecondSection = () => {
    return (
        <>
            <div className='border overflow-hidden w-full relative flex-col border-y border-[#e2e8f0] py-sm'>
                <div className='flex gap-5 text-5xl flex-row items-center font-medium whitespace-nowrap p-10 text-gray-300' id='scrolling-container'>
                    <div id="text-container" className="flex items-center gap-5">
                        <span>✦</span>
                        <div className="div1">Web Animation</div>
                        <span>✦</span>
                        <div className="div2">Performance Optimization</div>
                        <span>✦</span>
                        <div className="div3">Cross-Browser Compatibility</div>
                        <span>✦</span>
                        <div className="div4">Version Control (Git, GitHub)</div>
                        <span>✦</span>
                        <div className="div5">Community</div>
                        <span>✦</span>
                        <div className="div6">Development</div>

                    </div>
                    {/* Duplicate */}
                    <div id="text-container-secondary" className="flex items-center gap-5">
                        <span>✦</span>
                        <div className="div1">Web Animation</div>
                        <span>✦</span>
                        <div className="div2">Performance Optimization</div>
                        <span>✦</span>
                        <div className="div3">Cross-Browser Compatibility</div>
                        <span>✦</span>
                        <div className="div4">Version Control (Git, GitHub)</div>
                        <span>✦</span>
                        <div className="div5">Community</div>
                        <span>✦</span>
                        <div className="div6">Development</div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default SecondSection