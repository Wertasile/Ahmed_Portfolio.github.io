import { cn } from "../../utils/cn"

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  header,
  
}: {
  className?: string;
  title?: string | React.ReactNode;
  
  header?: React.ReactNode;
  
}) => {
  return (
    <div
      className={cn(
        "text-white row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 border-white/[0.2] bg-[#17153B] border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        
        <div className="font-sans font-bold ">
          {title}
        </div>
        
      </div>
    </div>
  );
};
