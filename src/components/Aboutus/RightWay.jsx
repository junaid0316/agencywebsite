import React from 'react'

const RightWay = () => {
    return (
        <div className='right-way'>
            <div className="container">
                <div className="head-cont">
                    <div className="head-pill w-fit">
                        <img src="/images/flower-white.svg" alt="" className="flwr-white" />
                        HOW IT WORKS
                    </div>
                    <h2 className='head-h2'>
                        PAY AND GET STARTED <span className="text-orange">
                            RIGHT AWAY
                        </span>
                    </h2>
                    <p className="text-gray-800">
                        Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do you best work.
                    </p>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 lg:mt-12 mt-10">
                    <div className="abt-card pb-6">
                        <h4 className='text-white font-space-grotesk text-2xl font-semibold mb-4'>
                            Subscribe to a plan
                        </h4>
                        <p className='text-gray-700'>
                            Subscribe to a plan & request as many designs as you’d like.
                        </p>
                        <img src="/images/abt-2.webp" alt="" className='!mt-10' />
                    </div>
                    <div className="abt-card pb-6">
                        <h4 className='text-white font-space-grotesk text-2xl font-semibold mb-4'>
                            Add a task
                        </h4>
                        <p className='text-gray-700'>
                            Manage your design board using Trello. View tasks and status.
                        </p>
                        <img src="/images/abt-3.webp" alt="" className='!mt-10' />
                    </div>
                    <div className="abt-card pb-6">
                        <h4 className='text-white font-space-grotesk text-2xl font-semibold mb-4'>
                            Enjoy results
                        </h4>
                        <p className='text-gray-700'>
                            Receive your completed tasks in 2-4 business days.
                        </p>
                        <img src="/images/abt-4.webp" alt="" className='!mt-10' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightWay