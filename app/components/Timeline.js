const timeline = [
    "Ingyenes konzultáció", "Stratégiai tervezés", "Egyedi dizájn", "Tesztelés", "Optimalizálás"
 ]

export default function Timeline({service}) {
    return (
        <div className=" py-10 bg-dark ">
                
            
            <div className=' flex items-center justify-center grad mx-10 rounded-lg'>
                {service.timeline.map((item, index) => (            
                    <div key={index} className="">
                        <div className='flex justify-center items-center rounded-full grad'>
                            {/* <div className=" grad rounded-lg p-5"> */}
                                <h1 className='text-4xl pr-2 text-grad font hover:rotate-90'>&gt;</h1>
                                <h1 className='text-6xl text-grad font px-2'>{index + 1}</h1>
                                <h1 className='text-center text-grad font pr-5'>{item.title}</h1>

                            </div>
                        {/* </div> */}
                    </div>
                ))}
            </div>
        </div>
    )
}