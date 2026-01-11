import img1 from "@/app/assets/images/img1page2.png"
import img2 from "@/app/assets/images/img2page2.png"
import img3 from "@/app/assets/images/img3page2.png"
import Image from "next/image"

export default function InfoBlock() {
  return (
    <section className="w-full">
      <p
        className="
          mx-auto mt-[120px]
          max-w-[600px]
          text-center
          font-cormorant
          text-[69px]
          leading-[108%]
          max-lg:text-[48px]
          max-md:px-4
          max-md:text-[36px]
        "
      >
        Mellow: Your Gateway to Serenity
      </p>

      <div
        className="
          mx-auto
          flex max-w-[1440px] justify-between gap-[30px]
          px-[100px] py-[100px]
          max-xl:px-12
          max-lg:flex-col
          max-md:px-4
          max-md:py-[60px]
        "
      >
        <div className="flex flex-col">
          <div className="pl-[40px] max-lg:pl-0">
            <p
              className="
                mt-[20px]
                max-w-[600px]
                font-sora
                text-[16px]
                font-light
                leading-[141%]
                tracking-[0.04em]
                max-lg:max-w-full
              "
            >
              Welcome to Hotel Mellow, where comfort meets tranquility.
              Nestled in the heart of a bustling city, our hotel offers a
              peaceful retreat for both business and leisure travelers.
              With modern amenities, and a warm, inviting atmosphere,
              we strive to make your stay with us.
            </p>

            <a
              href="#"
              className="
                mt-4
                flex w-fit items-center gap-[10px]
                font-sora text-[16px]
                text-black
              "
            >
              Read about us
              <img src="assets/icons/dalee.svg" alt="arrow" />
            </a>
          </div>

          <div className="mt-[40px] w-full overflow-hidden rounded-[20px]">
            <Image
              src={img1}
              alt="hotel"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div
          className="
            flex flex-col gap-[30px]
            max-lg:flex-row
            max-md:flex-col
          "
        >
          <div className="w-full overflow-hidden rounded-[20px]">
            <Image
              src={img2}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>

          <div className="w-full overflow-hidden rounded-[20px]">
            <Image
              src={img3}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
