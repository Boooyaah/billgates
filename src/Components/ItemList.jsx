function ItemList({
  img,
  title,
  price,
  qty,
  keyWord,
  setQty,
  currentMoney,
  total,
  setMoney,
}) {
  const handleBuyClick = () => {
    if (!qty[keyWord]) {
      setQty({ ...qty, [keyWord]: 1 });
    } else if (total < currentMoney) {
      setQty({ ...qty, [keyWord]: qty[keyWord] + 1 });
    }
  };
  const handleSellButton = () => {
    if (qty[keyWord] > 0) {
      setQty({ ...qty, [keyWord]: qty[keyWord] - 1 });
    }
  };

  const handleChangeQty = (event) => {
    // setQty(event.target.value);

 
    if (event.target.value && total < currentMoney) {
      setQty({ ...qty, [event.target.name]: parseInt(event.target.value) });
    } else if (currentMoney % qty[keyWord] < price) {
      setQty({ ...qty, [event.target.name]: parseInt(qty[keyWord]) });
    }

    if (currentMoney < 0) {
      setQty({ ...qty, [event.target.name]: 0 });
    }
    // if (event.target.value && total < currentMoney) {
    //   setQty({ ...qty, [event.target.name]: parseInt(event.target.value) });
    // } else if (currentMoney % qty[keyWord] < price) {
    //   setQty({ ...qty, [event.target.name]: parseInt(qty[keyWord]) });
    // }

    // if (currentMoney == 0) {
    //   setQty({ ...qty, [event.target.name]: 0 });
    // }
  };
  return (
    <div className="flex justify-center bg-white">
      <div className=" flex flex-col items-center justify-center h-64">
        <h2>
          <img className=" w-52 h-36" src={img} />
        </h2>
        <div>
          <h2 className="text-center font-semibold">{title}</h2>
          <h2 className=" text-green-600 font-bold text-center">{`${price}$`}</h2>
          <div className="flex  gap-2">
            <button
              disabled={price * qty[keyWord] > currentMoney}
              onClick={handleBuyClick}
              className=" disabled:bg-gray-400 bg-red-500 text-white py-2 px-5"
            >
              Buy
            </button>
            <input
              name={keyWord}
              value={qty[keyWord] || 0}
              onChange={handleChangeQty}
              className="border border-black w-28 text-center"
            />
            <button
              disabled={!qty[keyWord]}
              onClick={handleSellButton}
              className=" disabled:bg-gray-400 bg-green-500 text-white py-2 px-5"
            >
              Sell
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemList;
