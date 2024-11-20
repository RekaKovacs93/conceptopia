import Image from "next/image";

export default function About() {
    return (
        <div className="h-screen w-screen relative overflow-hidden">
            <Image
                src="https://cdn.pixabay.com/photo/2017/06/14/13/11/background-2402133_640.png"
                alt="Interior Photo"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 opacity-10 z-0"
            />
            <div className="relative z-10 flex flex-col justify-center h-full">
                <h1 className="font text-4xl text-dark mb-10 ml-40">
                    Üdvözlünk a Conceptopia Kreatív Ügynökség oldalán!
                </h1>
                {/* <h1 className="text-xl text-dark">
                    Szakértőket keresel kreatív megoldások terén? Bízd ránk projektjeidet a közösségi média menedzsmenttől a webfejlesztésen át a fotózásig és grafikáig, és emeld új szintre vállalkozásodat!
                </h1> */}
                <h1 className="text-xl text-dark w-2/5 ml-40">
                    Ahogy vállalkozásod növekedésével egyre több a kreatív feladat, egy profi csapat támogatása felbecsülhetetlen lehet. Ügynökségünk egyszerre biztosít erős arculatot, folyamatos jelenlétet, és hatékony költségkezelést – mindezt azért, hogy vállalkozásod szabadon fókuszálhasson a növekedésre, mi pedig minden mást kézben tartsunk.
                </h1>
            </div>
        </div>
    );
}
