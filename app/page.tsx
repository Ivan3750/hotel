import Image from "next/image"
import Hero from "@/app/assets/images/hero.png"


const HomePage = () =>  {
 return(
    <div className="px-[50px]">
        <Image src={Hero} alt="Hero" />
    </div>
 )
}

export default HomePage