import Image from "next/image";

const Talk = () => {
  return (
    <div
      id="talk"
      className="w-full h-full md:h-screen flex flex-col md:flex-row justify-center items-center"
    >
      <div className="relative h-full w-full flex justify-center items-center text-white px-5 xl:px-52 py-10 md:py-0 space-y-3">
        {/*<span className="font-semibold text-lg md:text-2xl tracking-widest">
          Talk to us
        </span>
        <p className="text-base md:text-xl text-center md:text-start">
          {`Nestled in the heart of the mythical Djema el Fna square, Le Salama is a true refuge after an immersion in the colorful and effervescent souks.`}
          <br />
          {`Here, you can enjoy a cocktail in peace and quiet, while savoring Moroccan culinary treasures.`}
          <br />
          {`On the menu are the must-tries: melting shoulder of lamb, delicious Tangia, or delicate Kemias, all prepared with a finesse and savoir-faire that sublimates traditional flavors.`}
          <br />
          {`The ambiance is not to be outdone: every evening, an oriental dance show adds a touch of magic to the atmosphere. `}
          <br />
          {`But this place doesn't reveal all its secrets at first glance... There are secrets waiting to be discovered, for those who dare to explore beyond the obvious. Come and let yourself be carried away by the mysterious soul of this enchanting place.`}
          <br />
  </p>*/}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-left"
          style={{
            backgroundImage: "url(/images/casa3.jpg)",
            backgroundAttachment: "fixed",
          }}
        ></div>
        <div className="h-full w-full xl:w-2/3 xl:h-1/2 bg-black opacity-80 flex flex-col justify-center items-center rounded-lg px-2 md:px-10 py-6">
          <span className="font-semibold text-lg md:text-2xl tracking-widest">
            Talk to us
          </span>
          <p className="text-base md:text-xl text-center md:text-start">
            {`Nestled in the heart of the mythical Djema el Fna square, Le Salama is a true refuge after an immersion in the colorful and effervescent souks.`}
            <br />
            {`Here, you can enjoy a cocktail in peace and quiet, while savoring Moroccan culinary treasures.`}
            <br />
            {`On the menu are the must-tries: melting shoulder of lamb, delicious Tangia, or delicate Kemias, all prepared with a finesse and savoir-faire that sublimates traditional flavors.`}
            <br />
            {`The ambiance is not to be outdone: every evening, an oriental dance show adds a touch of magic to the atmosphere. `}
            <br />
            {`But this place doesn't reveal all its secrets at first glance... There are secrets waiting to be discovered, for those who dare to explore beyond the obvious. Come and let yourself be carried away by the mysterious soul of this enchanting place.`}
            <br />
          </p>
        </div>
      </div>
    </div>
  );
  _5;
};

export default Talk;
