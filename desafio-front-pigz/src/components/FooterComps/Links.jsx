import React from "react";
import TalkToUsLogo from "../../lib/footer/icone-fale-conosco.svg";
import LinkedInLogo from "../../lib/footer/linkedin-with-circle.svg"
import InstagramLogo from"../../lib/footer/instagram-with-circle.svg"
import FacebookLogo from"../../lib/footer/facebook-with-circle.svg"
import YoutubeLogo from"../../lib/footer/youtube-with-circle.svg"
const Links = () => {
  return (
    <div>
      <div className="pl-4 text-[#666666] pt-12">
        <div className="flex flex-col gap-4">
          <p className="text-[#676767] font-semibold">Pigz</p>
          <div className="text-[80%] flex flex-col gap-4">
            <p>Sobre o Pigz</p>
            <p>Portal do Parceiro</p>
            <p>Quero ser um Pigz Partner</p>
          </div>
        </div>
      </div>

      <div className="pl-4 text-[#666666] pt-12">
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <img src={TalkToUsLogo} alt="/" className="w-[5%]" />
            <p className="text-[#676767] font-semibold">Fale conosco</p>
          </div>

          <div className="text-[80%] flex flex-col gap-4">
            <p>falecom@pigz.com.br</p>
            <p>(95) 3224-2603</p>
          </div>
          <p className="text-[#676767] font-semibold">Pigz nas redes</p>
          <div className="flex gap-4">
            <img src={LinkedInLogo} alt="/"/>
            <img src={InstagramLogo} alt="/"/>
            <img src={FacebookLogo} alt="/"/>
            <img src={YoutubeLogo} alt="/"/>
          </div>
          <div className="bg-[#9F9F9F] w-[95%] h-0.5 justify-center mt-12 rounded-full">
        
      </div>
        </div>

      </div>
      
    </div>
  );
};

export default Links;
