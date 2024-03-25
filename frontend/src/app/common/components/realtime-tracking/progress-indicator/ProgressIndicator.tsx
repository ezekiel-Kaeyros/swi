interface progressIndicatorProps {
  progress: string;
  isActive: boolean;
}

const ProgressIndicator: React.FC<progressIndicatorProps> = ({
  progress,
  isActive,
}) => {
  return (
    <div className="w-10 h-10 p-5 border-[6px]  border-bgColorDark rounded-full flex items-center justify-center">
      <div className="text-white text-[15px] font-medium">{progress}</div>{' '}
    </div>
  );
};

export default ProgressIndicator;
