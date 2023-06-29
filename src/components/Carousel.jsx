const images = [
  { src: "/images/img (1).jpg" },
  { src: "/images/img (2).jpg" },
  { src: "/images/img (3).jpg" },
  { src: "/images/img (4).jpg" },
  { src: "/images/img (5).jpg" },
];

import { Carousel } from "flowbite-react";

export default function DefaultCarousel() {
  return (
    <div className="h-[200px] md:h-[40vh] lg:h-[60vh] xl:h-[70]">
    <Carousel className="h-full w-full rounded-none ">
      {images.map((item) => {
        return <img src={item.src} key={item.src} className="rounded-none"></img>;
      })}
    </Carousel></div>
  );
}
