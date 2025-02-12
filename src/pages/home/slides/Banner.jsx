import { Link } from 'react-router-dom';


import { fadeIn } from '../../variant';
export default function Banner({ ban, title, description }) {
    return (
        <div
            className="hero h-full bg-cover bg-center bg-no-repeat "
            style={{
                backgroundImage: `url(${ban})`,
            }}>

            <div className="hero-content h-full text-neutral-content text-center ">
                <div className="max-w-lg h-full mx-auto pt-24 px-5">
                    <h1
                        variants={fadeIn("left", 0.2)}
                        
                        
                        
                        className="mb-5 lg:text-4xl md:text-4xl text-3xl font-bold text-white">
                        {title}
                    </h1>
                    <p
                        
                        
                        
                        
                        className=" text-white mb-16">
                        {description}
                    </p>
                    <Link to={"/all-posts"}
                        className="bg-sky-950 px-8 py-4 text-white border-2 hover:shadow-none hover:border-0 border-white shadow-md shadow-white "
                    >
                        All Volunteer Need Posts
                    </Link>

                </div>
            </div>
        </div>
    )
}
