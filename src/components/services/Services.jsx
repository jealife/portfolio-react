import React from 'react'

export default function Services() {
    return (
        <div>
            <div className="service w-full flex justify-center h-full flex-col gap-5 lg:pt-24 pt-2">
                <h2 className="font-bold text-gray-800 text-left text-4xl pb-9">
                    Services
                </h2>
                <div className="services-cards grid lg:grid-cols-3 md:grid-cols-3 w-full grid-cols-1 gap-3">

                    <div className="card-service bg-[#111928] p-6 rounded-md  flex flex-col gap-2">

                        <div className="icon">
                            <box-icon name='code-alt' size='md' color="#ff6d00"></box-icon>
                        </div>
                        <div className="content-card flex flex-col gap-3 mt-5">

                            <div className="title">
                                <h3 className='text-gray-200 text-xl font-semibold'>Developpment web</h3>
                            </div>
                            <div className="card-description">
                                <p className='text-gray-400 text-lg font-light line-clamp-4 text-balance'>
                                    Du design à la mise en ligne, je crée des sites web qui répondent à vos besoins et vos objectifs commerciaux.                                </p>
                            </div>
                        </div>
                    </div>


                    <article className="card-service bg-[#111928] p-6 rounded-md  flex flex-col gap-2">

                        <div className="icon">
                            <box-icon type='solid' name='camera' size='md' color="#ff6d00"></box-icon>
                        </div>
                        <div className="content-card flex flex-col gap-3 mt-5">

                            <div className="title">
                                <h3 className='text-gray-200 text-xl font-semibold'>Photographie</h3>
                            </div>
                            <div className="card-description">
                                <p className='text-gray-400 text-lg font-light line-clamp-4 text-balance'>
                                    Je capture des images qui mettent en valeur votre marque, vos produits ou vos services ou vous tout simplement.                                </p>
                            </div>
                        </div>
                    </article>

                    <article className="card-service bg-[#111928] p-6 rounded-md  flex flex-col gap-2">

                        <div className="icon">
                            <box-icon name='vector' type='solid' color="#ff6d00" size="md" ></box-icon>
                        </div>
                        <div className="content-card flex flex-col gap-3 mt-5">

                            <div className="title">
                                <h3 className='text-gray-200 text-xl font-semibold'>Conception graphiques</h3>
                            </div>
                            <div className="card-description">
                                <p className='text-gray-400 text-lg font-light line-clamp-4 text-balance'>
                                    Je crée des identités visuelle pour votre marque, des infographie et des support marketng.                                </p>
                            </div>
                        </div>
                    </article>
                </div>


            </div>
        </div>
    )
}
