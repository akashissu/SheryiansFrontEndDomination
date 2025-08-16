import React from "react";

function Card() {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?q=80&w=2096&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Amazon Basics",
      Description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias deserunt ut dolores beatae provident ratione esse ab, sit eum aperiam.",
    },

    {image:"https://plus.unsplash.com/premium_photo-1685136479835-1dfa5dbc5d44?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"Daily Course",Description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias deserunt ut dolores beatae provident ratione esse ab, sit eum aperiam.",
    },
    {image:"https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name:"Apple",Description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias deserunt ut dolores beatae provident ratione esse ab, sit eum aperiam."},
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center gap-10 bg-zinc-200">
        {data.map((elem,index)=>(
        <div key="index" className="w-52 bg-zinc-100 rounded-md overflow-hidden">
        <div className="w-full h-32 bg-zinc-300">
          <img
            src={elem.image}
            alt=""
          />
        </div>

        <div className="w-full px-3 py-4">
          <h2 className="font-semibold">{elem.name}</h2>
          <p className="mt-5 text-xs">{elem.Description}
          </p>
        </div>
      </div>))}
    </div>
  );
}

export default Card;
