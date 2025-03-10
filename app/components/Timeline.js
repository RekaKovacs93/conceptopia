export default function Timeline({ service }) {
    return (
        <div className="py-20 bg-dark w-screen">
            
            <h1 className="font gradient-text text-center pb-10 text-4xl">Az együttműködés folyamata</h1>
            <div className="flex items-center justify-between grad mx-20 rounded-lg">
                {service.timeline.map((item, index) => (
                    <div key={index} className="relative group"> {/* Added group class */}
                        <div className="flex justify-center items-center gap-x-10 rounded-full grad">
                        {/* {index !== 0 && ( */}
                            <h1 className="text-6xl text-grad font group-hover:rotate-90 transition-transform">
                                &gt;
                            </h1>
                            {/* )}                             */}
                            <h1 className="text-6xl text-grad font px-2">{index + 1}</h1>
                            {/* <h1 className="text-center text-grad font pr-5">{item.title}</h1> */}
                        </div>
                        {/* Tooltip-like hover effect */}
                        <div className="absolute top-full left-1/2 w-60 mt-2  transform -translate-x-1/2 bg-dark p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h1 className="text-center text-grad font pr-5 text-xl">{item.title}</h1>

                        <h1 className="font text-light p-2 text-sm">
                            {item.desc}
                        </h1>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
