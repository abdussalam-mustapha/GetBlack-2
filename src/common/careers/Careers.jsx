import React from "react";
import { Link } from "react-router-dom";
const imageUrl =
    "https://res.cloudinary.com/dirwn9yno/image/upload/v1664379811/getblack/istockphoto-1167270974-612x612_kycpgo.jpg";

function Careers() {
    return (
        <div
            style={{ background: `url(${imageUrl}) center center / cover no-repeat` }}
            className="vendors-img"
        >
            <div>
                <header className="text-center flex flex-col justify-center items-center">
                    <h1 className="my-4 font-extrabold text-4xl text-white">
                        Join Our Team
                    </h1>
                    <p className="text-md text-white">
                        GetBlack is revolutionalizing the way African goods and products are been showcased to the world.
                    </p>
                    <p className="text-md text-white">
                        We are making it easy to manage your sales and deliver to your desired location.
                    </p>
                </header>
            </div>

            <div className="container mx-auto p-4">
                <div className="flex justify-start items-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 mt-10 xl:mt-40">
                        <h1 className="text-2xl lg:text-4xl xl:text-5xl font-extrabold text-white">
                            Ready for the next adventure of your life?
                        </h1>
                    </div>
                </div>
                <div className="grid grid-cols-2">
                    <div className="mt-4 w-[200px]">
                        <Link
                            to="/career-roles"
                            className="btn bg-[#FFD700] hover:bg-[#52CD8B] border-none text-black p-2 md:p-3 font-bold uppercase text-md rounded-lg w-full"
                        >
                            View all open roles
                        </Link>
                    </div>
                </div>
            </div>




        </div>




    );
}

export default Careers;
