import Image from "next/image";

export default function About() {
    return (
        <div className="h-screen w-screen relative ">
            {/* <Image
                src="https://cdn.pixabay.com/photo/2017/06/14/13/11/background-2402133_640.png"
                alt="Interior Photo"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 opacity-10 z-0"
            /> */}
            <div className="relative z-10 gap-x-10 md:flex hidden justify-center items-center h-full mx-20">
                {/* <h1 className="font text-2xl md:text-4xl text-dark mb-10 md:ml-40 mt-10 md:mt-0">
                    Üdvözlünk a Conceptopia Kreatív Ügynökség oldalán!
                </h1> */}
                {/* <h1 className="text-xl text-dark">
                    Szakértőket keresel kreatív megoldások terén? Bízd ránk projektjeidet a közösségi média menedzsmenttől a webfejlesztésen át a fotózásig és grafikáig, és emeld új szintre vállalkozásodat!
                </h1> */}
                <div className="flex flex-col -rotate-90">
                    <h1 className="font text-2xl md:text-6xl text-dark">
                    Rólad
                    </h1>
                </div>
                    <h1 className="text-xl text-dark md:w-4/5">
                    Úgy érzed, hogy a vállalkozásodban ott rejlik a lehetőség, de a figyelemért vívott harcban gyakran alulmaradsz? Talán nincs időd minden marketing feladatot kézben tartani, vagy úgy érzed, hogy a márkád nem tükrözi azt az indentitást, amit valójában képviselsz? Elképzelhető, hogy hiányoznak azok a vizuális vagy online eszközök, amelyekkel magabiztosan megszólíthatnád a közönségedet?
                    </h1>
                <div className="flex flex-col -rotate-90">
                    <h1 className="font text-2xl md:text-6xl text-dark">
                    Rólunk
                    </h1>
                </div>
                <h1 className="text-xl text-dark md:w-4/5 ">
                A Conceptopia Kreatív Ügynökség azért jött létre, hogy segítsen neked átugrani ezeket az akadályokat, és lehetővé tegye, hogy kiaknázhasd vállalkozásod valódi potenciálját. A kreatív feladatok sokszorosára nőnek a növekedéssel, és ebben kulcsfontosságú, hogy egy profi csapat támogasson. Mi a tervezéstől a kivitelezésig mindent elvégezünk, hogy erősítsük a márkád jelenlétét. Eközben gondoskodunk arról is, hogy mindezt költséghatékony módon valósíthasd meg, így te nyugodtan a növekedésre összpontosíthatsz. Mi minden másról gondoskodunk, hogy sikeresen építhesd a jövődet.
                </h1>
                {/* <h1 className="text-xl text-dark md:w-2/5 md:ml-40">
                    Ezek nem egyedi problémák. Kis- és középvállalkozóként rengeteg szerepet töltesz be egyszerre, és nem csoda, hogy nehéz mindent egyszerre profi módon megvalósítani. Mi azért vagyunk itt, hogy ezekben támogassunk, mert hiszünk abban, hogy a vállalkozásod megérdemli, hogy a legjobbat mutassa magából.
                </h1> */}
            </div>
        </div>
    );
}
