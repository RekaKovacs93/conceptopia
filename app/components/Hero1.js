import Image from "next/image";

export default function Hero1() {
  
  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-center">
       {/* <Image
                src="/bg.webp"
                alt="Interior Photo"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 opacity-5 z-0"
            /> */}
      <h1 className="font text-9xl text-center gradient-text">
        CONCEPTOPIA
      </h1>
      <h1 className="font text-3xl text-center gradient-text mt-5">
        Kreativitás határok nélkül
      </h1>
     
      
    </div>
  );
}
