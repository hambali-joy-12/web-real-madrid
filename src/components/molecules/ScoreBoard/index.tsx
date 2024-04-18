const ScoreBoaedTime = ({ img, name }: { img: string; name: string }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <img src={img} alt="logo" className="h-[55px] block" />
      <p>{name}</p>
    </div>
  );
};

const ScoreBoard = () => {
  return (
    <div className="bg-[#0F2145] text-white pt-8 pb-5 px-16">
      <div className="text-center text-sm">
        <p className="font-bold text-base mb-1">Champions League</p>
        <p>Cuartos de final (vuelta) Etihad Stadium</p>
        <p>Fútbol · Primer Equipo</p>
      </div>

      <div className="flex justify-evenly items-start mt-5 gap-10">
        <div>
          <ScoreBoaedTime
            img="/assets/images/Real-madrid.webp"
            name="Real Madrid"
          />
        </div>
        <div>
          <div className="flex text-5xl items-center gap-14">
            <p>4</p>
            <p className="text-3xl text-gray-500">-</p>
            <p>1</p>
          </div>
          <div className="text-xs font-semibold text-center w-fit text-blue-900 p-1 mx-auto rounded bg-blue-50">
            23:30
          </div>
        </div>
        <div>
          <ScoreBoaedTime img="/assets/images/Barcelona.png" name="Barcelona" />
        </div>
      </div>

      <button className="border-2 border-blue-50/20 font-semibold hover:bg-white text-sm hover:text-indigo-600 w-full rounded-lg py-1 mt-5 transition-all duration-700">
        Follow The Match
      </button>
    </div>
  );
};

export default ScoreBoard;
