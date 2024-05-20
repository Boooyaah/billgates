import ItemList from "./ItemList";
import { useState } from "react";
function ItemMap({ items }) {
  const [qty, setQty] = useState({});
  const [money, setMoney] = useState(100000000000);
  let arr = Object.keys(qty).map((key) => { // burada objeyi arraye dönüştürdük çünkü totale ihtiyacımız vardı
   
    return { key: key, value: qty[key] };
   
  });
  console.log(arr)
  let total = 0;
  let arrSub = arr.forEach((item) => {
    let { price } = items.find((env) => env.keyWord == item.key);

    total = total + item.value * price;
  });

  return (
    <div className="w-full flex justify-center flex-col items-center">
      <div className="flex flex-col items-center justify-around w-[1024px]  mt-44">
        <div className=" bg-slate-500/50 w-full flex flex-col items-center py-32">
          <img
            className="w-32 rounded-full"
            src="https://i.guim.co.uk/img/media/43de83936de69e99c2251f371442f9cb00cbbedd/0_2242_8700_5220/master/8700.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=c1f12f3a1de5392d84170ee0ddcc1539"
          />
          <div className="flex flex-col items-center justify-between pt-10 gap-5">
            <h1 className="font-extrabold text-4xl">Spend Bill Gates' Money</h1>
            <button onClick={()=>{setQty({})}} className=" bg-yellow-500 py-5 px-10">Reset</button>

            <div className="font-extrabold text-5xl text-green-700">{`${
              money - total
            }$`}</div>
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-3 gap-5 w-[1024px] ">
        {items.map((item) => (
          <ItemList {...item} qty={qty} setQty={setQty} currentMoney={money-total}   total={total}  setMoney={setMoney}/>
         ))}
      </div>
    </div>
  );
}

export default ItemMap;
