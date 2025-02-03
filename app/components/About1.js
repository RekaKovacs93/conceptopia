import Image from "next/image";

export default function About() {
    return (
        <div className="h-screen w-screen relative ">
            <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 h-full">
  {/* Row 1, Column 1 - "Rólad" */}
  <div className="flex justify-center items-center p-4">
    <h1 className="text-6xl -rotate-90">Rólad</h1>
    <h1 className="text-xl">
    Úgy érzed, hogy a vállalkozásodban ott rejlik a lehetőség, de a figyelemért vívott harcban gyakran alulmaradsz? Talán nincs időd minden marketing feladatot kézben tartani, vagy úgy érzed, hogy a márkád nem tükrözi azt az indentitást, amit valójában képviselsz? Elképzelhető, hogy hiányoznak azok a vizuális vagy online eszközök, amelyekkel magabiztosan megszólíthatnád a közönségedet?
    </h1>
  </div>

  {/* Row 1, Column 2 - Dark Square */}
  <div className="flex flex-col justify-center items-center bg-dark p-4">
    {/* <h1 className="text-xl text-white">Rólunk</h1>
    <h1 className="text-xl text-white">
      A Conceptopia Kreatív Ügynökség azért jött létre, hogy segítsen neked átugrani ezeket az akadályokat, és lehetővé tegye, hogy kiaknázhasd vállalkozásod valódi potenciálját. A kreatív feladatok sokszorosára nőnek a növekedéssel, és ebben kulcsfontosságú, hogy egy profi csapat támogasson. Mi a tervezéstől a kivitelezésig mindent elvégezünk, hogy erősítsük a márkád jelenlétét. Eközben gondoskodunk arról is, hogy mindezt költséghatékony módon valósíthasd meg, így te nyugodtan a növekedésre összpontosíthatsz. Mi minden másról gondoskodunk, hogy sikeresen építhesd a jövődet.
    </h1> */}
  </div>

  {/* Row 2, Column 1 - Dark Square */}
  <div className="flex justify-center items-center bg-dark p-4">
    {/* <h1 className="text-6xl rotate-90">Rólunk</h1>
    <h1 className="text-xl">
      A Conceptopia Kreatív Ügynökség azért jött létre, hogy segítsen neked átugrani ezeket az akadályokat, és lehetővé tegye, hogy kiaknázhasd vállalkozásod valódi potenciálját. A kreatív feladatok sokszorosára nőnek a növekedéssel, és ebben kulcsfontosságú, hogy egy profi csapat támogasson. Mi a tervezéstől a kivitelezésig mindent elvégezünk, hogy erősítsük a márkád jelenlétét. Eközben gondoskodunk arról is, hogy mindezt költséghatékony módon valósíthasd meg, így te nyugodtan a növekedésre összpontosíthatsz. Mi minden másról gondoskodunk, hogy sikeresen építhesd a jövődet.
    </h1> */}
  </div>

  {/* Row 2, Column 2 - "Rólad" */}
  <div className="flex justify-center items-center p-4">
  
    <h1 className="text-xl">
      A Conceptopia Kreatív Ügynökség azért jött létre, hogy segítsen neked átugrani ezeket az akadályokat, és lehetővé tegye, hogy kiaknázhasd vállalkozásod valódi potenciálját. A kreatív feladatok sokszorosára nőnek a növekedéssel, és ebben kulcsfontosságú, hogy egy profi csapat támogasson. Mi a tervezéstől a kivitelezésig mindent elvégezünk, hogy erősítsük a márkád jelenlétét. Eközben gondoskodunk arról is, hogy mindezt költséghatékony módon valósíthasd meg, így te nyugodtan a növekedésre összpontosíthatsz. Mi minden másról gondoskodunk, hogy sikeresen építhesd a jövődet.
    </h1>
    <h1 className="text-6xl rotate-90">Rólunk</h1>
  </div>
</div>

        </div>
    );
}
