import Image, { StaticImageData } from "next/image";

interface IconProps {
  src: string | StaticImageData;
  alt: string;
  size: 24;
}

export function Icon(props: IconProps) {
  const { src, alt, size } = props;

  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      style={{ display: "inline-block", verticalAlign: "middle" }}
    />
  );
}
