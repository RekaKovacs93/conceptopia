import Image from "next/image";

export default function About() {
    return (
        <div className=" w-screen  ">
            {/* <Image
                src="https://cdn.pixabay.com/photo/2017/06/14/13/11/background-2402133_640.png"
                alt="Interior Photo"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 opacity-10 z-0"
            /> */}
            {/* <div className=" z-10 gap-x-5  justify-center items-center h-full mx-20"> */}
                {/* <h1 className="font text-2xl md:text-4xl text-dark mb-10 md:ml-40 mt-10 md:mt-0">
                    Üdvözlünk a Conceptopia Kreatív Ügynökség oldalán!
                </h1> */}
                {/* <h1 className="text-xl text-dark">
                    Szakértőket keresel kreatív megoldások terén? Bízd ránk projektjeidet a közösségi média menedzsmenttől a webfejlesztésen át a fotózásig és grafikáig, és emeld új szintre vállalkozásodat!
                </h1> */}
                <div className="text-center flex gap-y-5 flex-col justify-center items-center pt-20 px-40 font">
                    {/* <h1 className="font text-2xl md:text-6xl text-dark">
                    Rólad
                    </h1> */}
                
                    <div className="bg-dark rounded-lg md:w-full w-72">
                        <h1 className="text-xl gradient-text p-5">Úgy érzed, hogy a vállalkozásodban ott rejlik a lehetőség, de a figyelemért vívott harcban gyakran alulmaradsz? </h1>
                    </div>
                    <div className="bg-dark rounded-lg md:w-full w-72">
                        <h1 className="text-xl gradient-text p-5">Talán nincs időd minden marketing feladatot kézben tartani, vagy úgy érzed, hogy a márkád nem tükrözi azt az indentitást, amit valójában képviselsz?</h1>
                    </div>
                    <div className="bg-dark rounded-lg md:w-full w-72">
                        <h1 className="text-xl gradient-text p-5">Ezek nem egyedi problémák. Kis- és középvállalkozóként rengeteg szerepet töltesz be egyszerre, és nem csoda, hogy nehéz mindent egyszerre profi módon megvalósítani.</h1>
                    </div>    
                    <div className="bg-dark rounded-lg md:w-full w-72">
                        <h1 className="text-xl gradient-text p-5">Mi azért vagyunk itt, hogy ezekben támogassunk, mert hiszünk abban, hogy a vállalkozásod megérdemli, hogy a legjobbat mutassa magából.                 </h1>
                    </div>    
                        <h1 className="text-6xl text-dark font rotate-90 hover:scale-120 transition-transform">
                            <a href="/#about1">&gt;</a>
                            </h1>
                    </div>
                {/* <div className="flex flex-col ">
                    <h1 className="font text-2xl md:text-6xl text-dark">
                    Rólunk
                    </h1>
                
                <h1 className=" text-light bg-dark rounded-lg p-5  ">
                A Conceptopia Kreatív Ügynökség azért jött létre, hogy segítsen neked átugrani ezeket az akadályokat, és lehetővé tegye, hogy kiaknázhasd vállalkozásod valódi potenciálját. A kreatív feladatok sokszorosára nőnek a növekedéssel, és ebben kulcsfontosságú, hogy egy profi csapat támogasson. Mi a tervezéstől a kivitelezésig mindent elvégezünk, hogy erősítsük a márkád jelenlétét. Eközben gondoskodunk arról is, hogy mindezt költséghatékony módon valósíthasd meg, így te nyugodtan a növekedésre összpontosíthatsz. Mi minden másról gondoskodunk, hogy sikeresen építhesd a jövődet.
                </h1>
                </div> */}
                {/* <h1 className="text-xl text-dark md:w-2/5 md:ml-40">
                    Ezek nem egyedi problémák. Kis- és középvállalkozóként rengeteg szerepet töltesz be egyszerre, és nem csoda, hogy nehéz mindent egyszerre profi módon megvalósítani. Mi azért vagyunk itt, hogy ezekben támogassunk, mert hiszünk abban, hogy a vállalkozásod megérdemli, hogy a legjobbat mutassa magából.
                </h1> */}
            {/* </div> */}
        </div>
    );
}
