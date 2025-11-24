const InfoBlock = () => {
    return (
        <div className="page2">
            <p className="title2">Mellow: Your Gateway to Serenity</p>

            <div className="page2left">
                <div className="page2Text">
                    <p className="textPage2">
                        Welcome to Hotel Mellow, where comfort meets tranquility. Nestled in the heart 
                        of a bustling city, our hotel offers a peaceful retreat for both business and 
                        leisure travelers. With modern amenities and a warm, inviting atmosphere, 
                        we strive to make your stay with us.
                    </p>

                    <a href="#" className="ssilka">
                        Read about us 
                        <img src="assets/icons/dalee.svg" alt="dalee" className="daleeImg" />
                    </a>
                </div>

                <img
                    src="assets/images/img1page2.png"
                    alt="kartinka"
                    className="img1page2"
                />
            </div>

            <div className="page2right">
                <img src="assets/images/img2page2.png" alt="" className="img2page2" />
                <img src="assets/images/img3page2.png" alt="" className="img3page2" />
            </div>
        </div>
    );
};
