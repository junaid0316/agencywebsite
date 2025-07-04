import React, { useState, useEffect } from 'react'

const RecentWork = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(false);
    const [isXLargeScreen, setIsXLargeScreen] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsLargeScreen(window.innerWidth >= 576);
            setIsXLargeScreen(window.innerWidth >= 992);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const recentWork = [
        {
            img: '/images/showcase-1.jpg',
            tag: 'SPOTLIMO',
            title: 'Luxurious Limousine and Black Car Service Everyone Can Afford'
        },
        {
            img: '/images/showcase-1.jpg',
            tag: 'SPOTLIMO',
            title: 'Luxurious Limousine and Black Car Service Everyone Can Afford'
        },
        {
            img: '/images/showcase-1.jpg',
            tag: 'SPOTLIMO',
            title: 'Luxurious Limousine and Black Car Service Everyone Can Afford'
        },
        {
            img: '/images/showcase-1.jpg',
            tag: 'SPOTLIMO',
            title: 'Luxurious Limousine and Black Car Service Everyone Can Afford'
        },
        {
            img: '/images/showcase-1.jpg',
            tag: 'SPOTLIMO',
            title: 'Luxurious Limousine and Black Car Service Everyone Can Afford'
        },
        {
            img: '/images/showcase-1.jpg',
            tag: 'SPOTLIMO',
            title: 'Luxurious Limousine and Black Car Service Everyone Can Afford'
        },
        {
            img: '/images/showcase-1.jpg',
            tag: 'SPOTLIMO',
            title: 'Luxurious Limousine and Black Car Service Everyone Can Afford'
        },
        {
            img: '/images/showcase-1.jpg',
            tag: 'SPOTLIMO',
            title: 'Luxurious Limousine and Black Car Service Everyone Can Afford'
        },
        {
            img: '/images/showcase-1.jpg',
            tag: 'SPOTLIMO',
            title: 'Luxurious Limousine and Black Car Service Everyone Can Afford'
        },
        {
            img: '/images/showcase-1.jpg',
            tag: 'SPOTLIMO',
            title: 'Luxurious Limousine and Black Car Service Everyone Can Afford'
        },
        {
            img: '/images/showcase-1.jpg',
            tag: 'SPOTLIMO',
            title: 'Luxurious Limousine and Black Car Service Everyone Can Afford'
        },
        {
            img: '/images/showcase-1.jpg',
            tag: 'SPOTLIMO',
            title: 'Luxurious Limousine and Black Car Service Everyone Can Afford'
        }
    ]

    return (
        <div className='recent-work-section'>
            <div className="container">
                <div className="head-cont max-w-[890px]">
                    <div className="head-pill">
                        <img src="/images/flower-white.svg" alt="" className="flwr-white" />
                        Recent Work
                    </div>
                    <h2 className="head-h2">
                        Transformations That <span className="text-orange">Speak for Themselves</span>
                    </h2>
                    <p className="text-gray-900 text-center max-w-[710px] mx-auto">
                        From bold website redesigns to high-converting ad campaigns, discover how we turn ideas into measurable outcomes.
                    </p>
                </div>

                <div className="grid gap-5 lg:mt-16 mt-10" style={{
                    gridTemplateColumns: 'repeat(12, 1fr)',
                    gridAutoRows: 'auto'
                }}>
                    {
                        recentWork?.map((work, index) => {
                            // Calculate which row and position this item should be in
                            const cycle = Math.floor(index / 7); // Every 7 items (4+3) is one cycle
                            const positionInCycle = index % 7;
                            const row = cycle * 2 + (positionInCycle >= 4 ? 1 : 0); // 2 rows per cycle

                            // Responsive grid positioning
                            let gridColumn;

                            // Mobile: 1 column (spans full width)
                            if (!isLargeScreen) {
                                gridColumn = '1 / span 12';
                            }
                            // Large screens: 2 columns (each spans 6 grid columns)
                            else if (!isXLargeScreen) {
                                const isEven = index % 2 === 0;
                                gridColumn = isEven ? '1 / span 6' : '7 / span 6';
                            }
                            // Extra large screens: alternating 4/3 pattern
                            else {
                                if (positionInCycle < 4) {
                                    // First 4 items in cycle: 4 columns (each spans 3 grid columns)
                                    gridColumn = `${(positionInCycle * 3) + 1} / span 3`;
                                } else {
                                    // Last 3 items in cycle: 3 columns (each spans 4 grid columns)
                                    const adjustedPosition = positionInCycle - 4;
                                    gridColumn = `${(adjustedPosition * 4) + 1} / span 4`;
                                }
                            }

                            return (
                                <div
                                    className='recent-work-card'
                                    key={index}
                                    style={{
                                        gridColumn: gridColumn,
                                        gridRow: `${row + 1} / span 1`
                                    }}
                                >
                                    <img src={work?.img} alt="" />
                                    <div className="recent-content">
                                        <span>
                                            <img src="/images/flower-white.svg" alt="" className="flwr-white" />
                                            {work?.tag}
                                        </span>
                                        <h4>
                                            {
                                                work?.title
                                            }
                                        </h4>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default RecentWork