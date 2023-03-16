import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import ComponentsWrapper from "../hoc/ComponentsWrapper";
import emailjs from '@emailjs/browser';
import { slideIn } from "../utils/motion";
import contactLogo from "../assets/contact.png";

// template_zhd1kr8
// service_dyswn2j
// jh4mCg_V3YzhVcpd0


const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const formRef = useRef();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({...form, [name]: value});
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_dyswn2j',
        'template_zhd1kr8',
        {
          from_name: form.name,
          to_name: "Karim",
          from_email: form.email,
          to_email: "karim.note10.l@gmail.com",
          message: form.message,
        },
        'jh4mCg_V3YzhVcpd0'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };


  return (
    <div className=" lg:flex-row flex-col flex gap-10 overflow-hidden lg:items-center">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[1] bg-[#b0b0b0] p-8 rounded-2xl"
      >
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-primary font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="py-4 px-6 text-primary rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-primary font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="py-4 px-6 text-primary rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-primary font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              type="text"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="py-4 px-6 text-primary rounded-lg outline-none border-none font-medium"
            />
          </label>
          
          <button
            type="submit"
            className="bg-[#b56666] py-3 px-8 outline-none w-fit text-primary rounded-xl font-bold shadow-md shadow-[#777777]"
          >
            { loading ? 'Sending...' : 'Send' }
          </button>
        </form>
      </motion.div>

      <motion.div 
        variants={slideIn("right", "tween", 0.2, 1)}
        className="hidden lg:flex justify-center items-center w-[100%] md:w-[50%] sm:h-[400px] lg:h-full h-[350px]"
      >
        <img
          className="object-contain h-[70%]"
          src={contactLogo}
          alt="contact-logo"
        />
      </motion.div>

    </div>
  );
};

export default ComponentsWrapper(Contact, "contact");
