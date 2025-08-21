import Button from "@/ui/Button";

const GameCard = () => {
  return (
    <div className="flex items-center p-4 bg-[#2e0f55] rounded-lg shadow-lg max-w-full mx-auto mr-2">
      {/* Левая часть - изображение-заглушка */}
      <div className="w-24 h-24 bg-gray-400 rounded-lg flex items-center justify-center text-gray-700 text-sm font-semibold flex-shrink-0">
        96x96
      </div>

      {/* Центральная часть - текст */}
      <div className="ml-4 flex-grow">
        <h3 className="text-white text-lg font-semibold">The Llion's Share</h3>
        <p className="text-gray-300 text-sm">Llion Gaming</p>
      </div>

      {/* Правая часть - кнопка "Play" */}
      <Button>Play</Button>
    </div>
  );
};

export default GameCard;
