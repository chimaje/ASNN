const Card = ({
  card,
  hideBar = false,
}: {
  card: {
    name: string;
    description: string;
    icon: JSX.Element;
    color: string;
    rate: JSX.Element;
    progress: string;
  };
  hideBar?: boolean;
}) => {
  return (
    <>
      <div className="md:w-full py-6 flex">
        {!hideBar && (
          <hr className="w-[1px] h-full border-none bg-gray-200 hidden md:block" />
        )}
        <div className="flex justify-between items-center mx-6">
          <div>
            <div className="flex justify-between">
              <div>
                <p className="font-semibold text-3xl">{card.name}</p>
                <p>{card.description}</p>
                <div className="flex flex-wrap items-center gap-3 mt-3 text-gray-400 ">
                  {card.rate}
                  <p>{card.progress}</p>
                </div>
              </div>
              <div
                className="w-10 h-10 rounded-2xl flex justify-center items-center bg-white shadow-md  "
                style={{ backgroundColor: card.color }}
              >
                {card.icon}
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-full h-[1px] border-none bg-gray-200 block md:hidden" />
    </>
  );
};

export default Card;
