import React, { useEffect } from 'react'
import { FaGlobe } from 'react-icons/fa6'

const ServiceTabs = ({
    headData = {
        pill: "See How Our Services Make Us Tick Us",
        title: "WHAT WE",
        highlightText: "DO BEST",
        description: "We don't sell our digital marketing and web design services in a hit-or-miss manner. Instead, we cater to your problems through our targeted services, including:"
    },
    tabsData = {},
    activeTab,
    setActiveTab,
    headClass = "",
    isEqualBox = false,
    tabsWidth
}) => {

    const currentTab = tabsData[activeTab]

    // Preload all tab images for instant switching
    useEffect(() => {
        Object.values(tabsData).forEach(tab => {
            if (tab.image) {
                const img = new Image()
                img.src = tab.image
            }
        })
    }, [tabsData])

    if (!Object.keys(tabsData).length) {
        return <div>No tabs data provided</div>
    }

    return (
        <div className={`service-tabs`}>
            <div className="container">
                <div className={`head-cont ${headClass}`}>
                    <div className="head-pill">
                        <img src="/images/flower-white.svg" alt="" className="flwr-white" />
                        {headData.pill}
                    </div>
                    <h2 className="head-h2">
                        {headData.title} <span className="text-orange">{headData.highlightText}</span>
                    </h2>
                    <p className="text-gray-900 text-center max-w-[800px] mx-auto">
                        {headData.description}
                    </p>
                </div>

                {/* Main Tabs */}
                <div className={`flex md:flex-wrap justify-center gap-4 sm:my-12 my-8 max-w-5xl mx-auto overflow-x-auto sm:pb-0 pb-1.5 ${tabsWidth ? tabsWidth : ""}`}>
                    {Object.entries(tabsData).map(([key, tab]) => (
                        <button
                            key={key}
                            onClick={() => {
                                // Force immediate state update
                                setActiveTab(key)
                                // Update URL without causing re-render delays
                                const url = new URL(window.location)
                                url.searchParams.set('service', key)
                                window.history.replaceState({}, '', url.toString())
                            }}
                            className={`px-6 py-2 flex gap-2 items-center rounded-full border transition-all duration-300 font-space-grotesk tab-what ${activeTab === key
                                ? 'bg-orange-500 text-white border-orange-500 active-tab-what '
                                : 'bg-transparent text-gray-900 border-gray-600 hover:border-orange-500 hover:text-orange-500'
                                }`}
                        >
                            {
                                tab.icon ?
                                    tab.icon
                                    :
                                    <FaGlobe />
                            }
                            <span className='whitespace-nowrap font-space-grotesk'>
                                {tab.title}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Two Column Layout */}
                <div className={`grid ${isEqualBox ? 'lg:grid-cols-2' : 'lg:grid-cols-5'} grid-cols-1 gap-5`}>
                    {/* Left Column - Services List */}
                    <div className={`results-tab ${!isEqualBox ? 'lg:col-span-2' : ''} lg:order-1 order-2`}>
                        {currentTab?.service && (
                            <>
                                <div className="head-pill w-fit">
                                    <img src="/images/flower-white.svg" alt="" className="flwr-white" />
                                    {currentTab.service.title}
                                </div>
                                <h3 className="text-2xl font-semibold mt-4 mb-7">
                                    {currentTab.service.heading}
                                </h3>
                                {currentTab.service.description && (
                                    <p className="text-gray-700">
                                        {currentTab.service.description}
                                    </p>
                                )}
                            </>
                        )}
                    </div>

                    <div className={`image-container ${!isEqualBox ? 'lg:col-span-3' : ''} lg:order-2 order-1`}>
                        <img
                            key={`tab-image-${activeTab}`}
                            src={currentTab.image}
                            alt={currentTab.title}
                            className="rounded-lg shadow-2xl w-full h-full aspect-video object-cover transition-all duration-200 ease-in-out"
                            loading="eager"
                            style={{ opacity: 1 }}
                        />
                    </div>


                </div>
            </div>
        </div>
    )
}

export default ServiceTabs