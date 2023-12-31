import React from 'react'

export default function Services() {
    return (
        <div>
            <div className="service w-full flex flex-col gap-5 lg:pt-24 pt-2">
                <h2 className="font-bold text-gray-800 text-left text-4xl pb-9">
                    Services
                </h2>
                <div className="services-cards grid lg:grid-cols-3 grid-cols-1 gap-3">

                    <div className="card-service bg-[#111928] p-6 rounded-md  flex flex-col gap-2">

                        <div className="icon">
                            <box-icon name='code-alt' size='md' color="#ff6d00"></box-icon>
                        </div>
                        <div className="content-card flex flex-col gap-3 mt-5">

                            <div className="title">
                                <h3 className='text-gray-200 text-xl font-semibold'>Developpment web</h3>
                            </div>
                            <div className="card-description">
                                <p className='text-gray-400 text-lg font-light'>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, inventore.
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="card-service bg-[#111928] p-6 rounded-md  flex flex-col gap-2">

                        <div className="icon">
                            <box-icon type='solid' name='camera' size='md' color="#ff6d00"></box-icon>
                        </div>
                        <div className="content-card flex flex-col gap-3 mt-5">

                            <div className="title">
                                <h3 className='text-gray-200 text-xl font-semibold'>Photographie</h3>
                            </div>
                            <div className="card-description">
                                <p className='text-gray-400 text-lg font-light'>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, inventore.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="card-service bg-[#111928] p-6 rounded-md  flex flex-col gap-2">

                        <div className="icon">
                            <box-icon name='vector' type='solid' color="#ff6d00" size="md" ></box-icon>
                        </div>
                        <div className="content-card flex flex-col gap-3 mt-5">

                            <div className="title">
                                <h3 className='text-gray-200 text-xl font-semibold'>Conception graphiques</h3>
                            </div>
                            <div className="card-description">
                                <p className='text-gray-400 text-lg font-light'>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, inventore.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
