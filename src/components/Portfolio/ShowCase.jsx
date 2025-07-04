import React from 'react'

const ShowCase = () => {
    return (
        <div className='showcase-section'>
            <div className="container">
                <div className="head-cont gap-5">

                    <div className="head-pill">
                        <img src="/images/flower-white.svg" alt="" className="flwr-white" />
                        Recent Work
                    </div>
                    <h2 className="head-h2">
                        Website <span className="text-orange">ShowCase</span>
                    </h2>
                    <p className="text-gray-900 text-center max-w-[560px]">
                        From bold website redesigns to high-converting ad campaigns, discover how we turn ideas into measurable outcomes.
                    </p>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 lg:my-16 my-10 min-h-[600px]">
                    <div className='grid lg:grid-flow-col lg:grid-rows-2 lg:grid-cols-none grid-cols-2 gap-5'>
                        <div className='recent-work-card'>
                            <img src='/images/showcase-1.jpg' alt="" className='aspect-auto h-full' />
                            <div className="recent-content">
                                <span>
                                    <img src="/images/flower-white.svg" alt="" className="flwr-white" />
                                    SPOTLIMO
                                </span>
                                <h4>
                                    Luxurious Limousine and Black Car Service Everyone Can Afford
                                </h4>
                            </div>
                        </div>
                        <div className='recent-work-card' >
                            <img src='/images/showcase-2.jpg' alt="" className='aspect-auto h-full' />
                            <div className="recent-content">
                                <span>
                                    <img src="/images/flower-white.svg" alt="" className="flwr-white" />
                                    SPOTLIMO
                                </span>
                                <h4>
                                    Luxurious Limousine and Black Car Service Everyone Can Afford
                                </h4>
                            </div>
                        </div>
                    </div>

                    <div className=''>
                        <div className='recent-work-card h-full' >
                            <img src='/images/showcase-3.jpg' alt="" className='aspect-auto h-full' />
                            <div className="recent-content">
                                <span>
                                    <img src="/images/flower-white.svg" alt="" className="flwr-white" />
                                    SPOTLIMO
                                </span>
                                <h4>
                                    Luxurious Limousine and Black Car Service Everyone Can Afford
                                </h4>
                            </div>
                        </div>
                    </div>

                    <div className='grid lg:grid-flow-col lg:grid-rows-5 lg:grid-cols-none grid-cols-2 gap-5'>
                        <div className='recent-work-card lg:row-span-2' >
                            <img src='/images/showcase-1.jpg' alt="" className='aspect-auto h-full' />
                            <div className="recent-content">
                                <span>
                                    <img src="/images/flower-white.svg" alt="" className="flwr-white" />
                                    SPOTLIMO
                                </span>
                                <h4>
                                    Luxurious Limousine and Black Car Service Everyone Can Afford
                                </h4>
                            </div>
                        </div>
                        <div className='recent-work-card lg:row-span-3' >
                            <img src='/images/showcase-2.jpg' alt="" className='aspect-auto h-full' />
                            <div className="recent-content">
                                <span>
                                    <img src="/images/flower-white.svg" alt="" className="flwr-white" />
                                    SPOTLIMO
                                </span>
                                <h4>
                                    Luxurious Limousine and Black Car Service Everyone Can Afford
                                </h4>
                            </div>
                        </div>
                    </div>

                    <div className='grid lg:grid-flow-col lg:grid-rows-5 lg:grid-cols-none grid-cols-2 gap-5'>
                        <div className='recent-work-card lg:row-span-3' >
                            <img src='/images/showcase-1.jpg' alt="" className='aspect-auto h-full' />
                            <div className="recent-content">
                                <span>
                                    <img src="/images/flower-white.svg" alt="" className="flwr-white" />
                                    SPOTLIMO
                                </span>
                                <h4>
                                    Luxurious Limousine and Black Car Service Everyone Can Afford
                                </h4>
                            </div>
                        </div>
                        <div className='recent-work-card lg:row-span-2' >
                            <img src='/images/showcase-2.jpg' alt="" className='aspect-auto h-full' />
                            <div className="recent-content">
                                <span>
                                    <img src="/images/flower-white.svg" alt="" className="flwr-white" />
                                    SPOTLIMO
                                </span>
                                <h4>
                                    Luxurious Limousine and Black Car Service Everyone Can Afford
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>

                <a href="/portfolio/our-portfolio" className="btn-white w-fit mx-auto px-5">
                    View All Projects
                </a>
            </div>
        </div>
    )
}

export default ShowCase