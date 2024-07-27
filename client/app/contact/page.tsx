import CiclularDesign from "@/components/contact/CiclularDesign";
import Navbar from "@/components/Navbar";
import { contactItem } from "@/components/data/conatct";
import ContactForm from "@/components/contact/ContactForm";

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="relative z-10 overflow-hidden bg-white py-5">
        <div className="container">
          <div className="-mx-4 flex flex-wrap lg:justify-between">
            <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
              <div className="mb-12 max-w-[500px] lg:mb-0">
                <h2 className="mb-1 text-[32px] font-bold uppercase text-dark sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                  Get in touch with us!
                </h2>
                <p className="mb-4 text-base leading-relaxed text-body-color">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eius tempor incididunt ut labore e dolore magna aliqua. Ut
                  enim adiqua minim veniam quis nostrud exercitation ullamco
                </p>
                {contactItem.map((item) => (
                  <div className="mb-2 flex w-full max-w-[370px]">
                    <div
                      key={item.id}
                      className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]"
                    >
                      {item.icon && <item.icon size={30} />}
                    </div>
                    <div className="w-full">
                      <h4 className="mb-1 text-xl font-bold text-dark">
                        {item.title}
                      </h4>
                      <p className="text-base text-body-color">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full px-5 lg:w-1/2 xl:w-5/12">
              <div className="relative rounded-lg bg-white shadow-lg border border-gray-100 sm:p-8 p-4">
                <ContactForm />
                <CiclularDesign />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
