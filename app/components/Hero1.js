import Image from "next/image";

export default function Hero1() {
  
  return (
    <div className="min-h-screen  flex flex-col items-center justify-center px-4">
       {/* <Image
                src="/bg.webp"
                alt="Interior Photo"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 opacity-5 z-0"
            /> */}
      <h1 className="font text-4xl md:text-9xl text-center md:gradient-text text-grad">
        CONCEPTOPIA
      </h1>
      <h1 className="font md:text-3xl text-lg text-center md:gradient-text text-grad mt-5">
        Kreativitás határok nélkül
      </h1>
     
      
    </div>
  );
}
