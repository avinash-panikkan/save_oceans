import React from "react";

function Home() {
  return (
    <div className="w-full h-fit">
      <div className="flex flex-col text-[200px] font-extrabold pl-6 bg-[url('../public/images/bg.jpg')] bg-cover bg-center text-white h-screen">
        <p className="mt-20 drop-shadow-lg">SAVE</p>
        <p className="mt-[-125px] drop-shadow-lg">OCEANS</p>
      </div>
      <div className="flex w-full h-[300px] mt-10" >
        <div className="group relative w-1/3 flex items-center justify-center">
        <img className="w-5/6 rounded-lg" src="../public/images/beauty_of_oceans.jpg" alt="beauty of oceans" />
        </div>
        <div className="w-2/3 pt-10 pl-6">
            <p className="font-bold text-6xl text-primary">The Beauty Of Oceans</p>
            <p className="text-xl pt-4 pr-6">The oceans, vast and enchanting, mesmerize with their ethereal beauty. 
            Endless cerulean depths meet the azure sky, where sunlight creates a dazzling mosaic. 
            Rhythmic waves leave trails of frothy lace, unveiling a world of vibrant coral reefs and iridescent fish below. 
            The beauty of the oceans is nature's masterpiece—an alluring spectacle that captivates with its boundless allure.</p>
        </div>
      </div>
      <div className="flex w-full h-[300px] mt-10 mb-10" >
        <div className="w-2/3 pt-2 pl-10">
            <p className="font-bold text-6xl text-primary">The Importance Of Oceans</p>
            <p className="text-xl pt-4 pr-6">Oceans, spanning more than 70% of Earth, are not just breathtaking expanses of beauty; 
            they are life's essential caretakers. Beyond their mesmerizing vistas, oceans play a pivotal role in maintaining our planet's balance. 
            They absorb carbon dioxide, safeguarding us from climate shifts, and generously supply the oxygen we breathe. 
            Home to a rich tapestry of marine life, oceans sustain biodiversity and provide sustenance for millions. 
            As primary sources of protein, they ensure food security for billions. 
            Moreover, oceans, with their immense influence on climate and weather, weave a delicate thread connecting us all. 
            In essence, oceans are not just vast bodies of water; they are the beating heart of our planet, 
            deserving our utmost care and preservation.</p>
        </div>
        <div className=" w-1/3 flex items-center justify-center pt-5">
        <img className="w-5/6 rounded-lg" src="../public/images/1489.jpg" alt="beauty of oceans"/>
        </div>
      </div>
    </div>
  );
}

export default Home;
