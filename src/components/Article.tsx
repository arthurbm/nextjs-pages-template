import React from "react";
import Image from "next/image";

interface ArticleProps {
  date: string;
  title: string;
  content: string;
}

const Article: React.FC<ArticleProps> = ({ date, title, content }) => (
  <div className="mb-8">
    <time dateTime={date} className="block text-sm font-medium text-gray-500">
      {date}
    </time>
    <h2 className="mt-2 text-xl font-bold leading-snug text-indigo-900 md:text-2xl">
      {title}
    </h2>
    <p className="mt-2 text-base text-gray-700">{content}</p>
  </div>
);

interface ImageComponentProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  layout?: "fill" | "fixed" | "intrinsic" | "responsive";
  objectFit?: "contain" | "cover";
}

const ImageComponent: React.FC<ImageComponentProps> = ({
  src,
  alt,
  width,
  height,
  layout = "responsive",
  objectFit = "cover",
}) => (
  <div
    className={`w-full ${layout === "fill" ? "h-64" : "aspect-w-16 aspect-h-9"} relative`}
  >
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      layout={layout}
      objectFit={objectFit}
      className="rounded-lg"
    />
  </div>
);

export const BlogLayout: React.FC = () => {
  return (
    <div className="mx-auto max-w-7xl bg-white py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <ImageComponent
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/51a325e6f2e10fc95d1fa0c6b3709f6b8575379760f86cdfa7016e4ceedbb8c0?apiKey=5503bfd9e2fe4e73b2f967c9116ec022&"
            alt="ReactJS concepts"
            width={1173}
            height={700}
          />
          <Article
            date="January 4, 2022"
            title="Starting with ReactJS in 2022"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque..."
          />
        </div>
        <div className="md:col-span-1">
          <Article
            date="January 4, 2022"
            title="Discover the main techniques to achieve an international programming job"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque..."
          />
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
        <ImageComponent
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f9dff425f39b2ad16b3b7fd6db92491777cac73202cab8e1a64a1acf15691d8?apiKey=5503bfd9e2fe4e73b2f967c9116ec022&"
          alt="Generic placeholder"
          width={320}
          height={180}
          layout="intrinsic"
        />
        <ImageComponent
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/09ebfa90589e86572698fed9b018fafc51742263fc768a64fe699ced1a7eda8b?apiKey=5503bfd9e2fe4e73b2f967c9116ec022&"
          alt="Generic placeholder"
          width={320}
          height={180}
          layout="intrinsic"
        />
        <ImageComponent
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c17c0baef3b8de29e6cdd3fd81ee30e3e17885605cea494d8c9f9450d41e761c?apiKey=5503bfd9e2fe4e73b2f967c9116ec022&"
          alt="Generic placeholder"
          width={320}
          height={180}
          layout="intrinsic"
        />
      </div>
    </div>
  );
};
