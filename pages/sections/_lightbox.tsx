import "lightbox.js-react/dist/index.css";
import { SlideshowLightbox, Image, ImageProps } from "lightbox.js-react";

interface ImageObject {
  src: string;
  alt: string;
}

const LightBox = (): JSX.Element => {
  const images: ImageObject[] = [
    { src: "/church.jpg", alt: "church" },
    { src: "/hospitality.png", alt: "hospitality" },
    { src: "/men.png", alt: "men" },
    { src: "/praise.png", alt: "praise" },
    { src: "/school.png", alt: "school" },
    { src: "/pastoral.png", alt: "pastoral" },
    { src: "/1.png", alt: "church" },
    { src: "/2.png", alt: "church" },
    { src: "/3.png", alt: "church" },
    { src: "/4.png", alt: "church" },
    { src: "/5.png", alt: "church" },
    { src: "/6.png", alt: "church" },
    { src: "/7.png", alt: "church" },
    { src: "/8.png", alt: "church" },
    { src: "/9.png", alt: "church" },
    { src: "/10.png", alt: "church" },
  ];
  return (
    <section className=" bg-bg" id="gallery">
      {/* <SlideshowLightbox
        lightboxIdentifier="lightbox1"
        framework="next"
        images={images.map((image) => ({
          src: image.src,
          alt: image.alt,
        }))}
      >
        {images.map((image: ImageObject) => (
          <Image
            key={image.src}
            {...(image as ImageProps)}
            height={500}
            width={500}
            data-lightboxjs="lightbox1"
            quality={80}
            alt={image?.alt}
            src={image?.src}
          />
        ))}
      </SlideshowLightbox> */}
    </section>
  );
};

export default LightBox;
