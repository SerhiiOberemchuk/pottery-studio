import { cn } from '@/utils/cn';

type Props = {
  titleText: string;
  className?: string;
};

function TitleBig({ titleText, className }: Props) {
  return (
    <h1
      className={cn(
        'font-open-sans text-size-32 md:text-size-44 xl:text-size-62 text-brown-dark leading-44 md:leading-50 xl:leading-80 font-normal',
        className
      )}
    >
      {titleText}
    </h1>
  );
}

export default TitleBig;
