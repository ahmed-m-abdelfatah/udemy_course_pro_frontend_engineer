interface ImageProps {
  imgURL: string;
  alt: string;
  className?: string;
}

const Image = ({ imgURL, alt, className }: ImageProps) => {
  return <img src={imgURL} alt={alt} className={className} />;
};

export default Image;
