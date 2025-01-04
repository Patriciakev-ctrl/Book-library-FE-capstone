import  "../css/Contact.css";

//show the way we can contact the app owner
function Contact() {
    return(
        <div > 
            <h1>You can contact us on</h1>
            <div className="flex justify-center space-x-4" >  
                <div className="flex flex-col items-center">
                    <a href="https://www.linkedin.com/in/patriciatchingue/" target="blank"> <img title="Linkedin" alt="Linkedin logo" className="text-2xl" src="../../src/assets/linkedin.png" /></a>
                </div>

                <div className="flex flex-col items-center">
                    <a href="https://x.com/KevineTchingue" target="blank"> <img  title="Twitter" src="../../src/assets/twitter.png" alt="Twitter logo" className="text-2xl" /> </a>
                </div>

                <div className="flex flex-col items-center">
                    <a href="mailto:patricia.tchingue@gmail.com" target="blank"> <img  title="Email" alt="Email logo" className="text-2xl" src="../../src/assets/message.png" /></a>
                </div>

                <div className="flex flex-col items-center">
                    <a href="https://wa.me/+237697887157" target="blank"> <img title="Phone" alt="Phone logo" className="text-2xl" src="../../src/assets/call.png" /></a>
                </div>
            </div>

        </div>

    );
}
export default Contact;