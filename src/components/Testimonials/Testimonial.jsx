import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
      "Absolutely thrilled with the software services provided! Their team's expertise and dedication brought our vision to life. The end result exceeded our expectations, and we're now equipped with a cutting-edge solution that has streamlined our operations and delighted our customers. Highly recommended!"
    },
    {
      img: profilePic2,
      review:
      "Working with this software company has been an exceptional experience. Their attention to detail and thorough understanding of our requirements were evident from the start. They delivered a flawless web application that has significantly improved our efficiency. Fantastic communication and top-notch service throughout the project."
    },
    {
      img: profilePic3,
      review:
      "Outstanding job on our mobile app development! The user interface is sleek and intuitive, making it a breeze for our customers to navigate. Their team was receptive to our ideas and provided valuable insights, resulting in a product that stands out in the market. We couldn't be happier with the outcome!"
    },
    {
      img: profilePic4,
      review:
      "Impressed with the web development services! The team showcased a perfect blend of creativity and technical expertise, resulting in a website that truly reflects our brand identity. They went above and beyond to ensure every aspect of the design aligned with our goals. Highly satisfied with their professionalism and support."
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from us...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
