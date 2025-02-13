const timeline = [
    "Ingyenes konzultáció", "Stratégiai tervezés", "Egyedi dizájn", "Tesztelés", "Optimalizálás"
 ]

export default function Timeline() {
    return (
        <div className=" py-10 bg-dark ">
                
            
            <div className=' flex items-center justify-center grad mx-10 rounded-lg'>
                {timeline.map((item, index) => (            
                    <div key={index} className="">
                        <div className='flex justify-center items-center rounded-full grad'>
                            {/* <div className=" grad rounded-lg p-5"> */}
                                <h1 className='text-6xl pr-5 text-grad font'>&gt;</h1>
                                <h1 className='text-6xl text-grad font px-2'>{index + 1}</h1>
                                <h1 className='text-lg  text-grad font pr-5'>{item}</h1>

                            </div>
                        {/* </div> */}
                    </div>
                ))}
            </div>
        </div>
    )
}