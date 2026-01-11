const Footer = () => {
  return (
    <footer className="
      border-t border-[#E9E9E9]
      px-6 py-12
      md:px-12 md:py-16
      lg:px-[100px] lg:py-[80px]
    ">
      <div className="
        flex flex-col gap-10
        md:grid md:grid-cols-2 md:gap-12
        lg:flex lg:flex-row lg:justify-between
      ">
        {/* Column 1 */}
        <ul className="
          flex flex-col gap-3
          font-sora text-[15px] md:text-[16px]
          capitalize tracking-[0.04em] text-[#1A1A1A]
        ">
          <li>Forside</li>
          <li>Om os</li>
          <li>Vores værelser</li>
          <li>Services</li>
          <li>Nyheder</li>
          <li>Kontakt</li>
        </ul>

        <ul className="
          flex flex-col gap-3
          font-sora text-[15px] md:text-[16px]
          capitalize tracking-[0.04em] text-[#1A1A1A]
        ">
          <li>Spa</li>
          <li>Tilbud</li>
          <li>Media</li>
          <li>Vilkår og betingelser</li>
          <li>Nyheder</li>
          <li>Services</li>
        </ul>

        <div>
          <h2 className="
            mb-6
            font-cormorant
            text-[32px] md:text-[38px] lg:text-[45px]
            leading-[120%] text-[#1A1A1A]
          ">
            Vores Info
          </h2>

          <div className="
            font-sora text-[15px] md:text-[16px]
            leading-[140%] tracking-[0.04em] text-[#1A1A1A]
          ">
            <div className="mb-4 flex items-start gap-4 max-w-[340px]">
              <img src="/hotel/assets/icons/geolocatia.svg" alt="" />
              <p>
                Mellow hotel & resort 123 Serenity Avenue Tranquil City,
                Peaceful State Relaxingland
              </p>
            </div>

            <div className="mb-4 flex items-center gap-4">
              <img src="/hotel/assets/icons/phone.svg" alt="" />
              <p>(93) 123 456 6789</p>
            </div>

            <div className="flex items-center gap-4">
              <img src="/hotel/assets/icons/post.svg" alt="" />
              <p>yourinfo@yourmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
