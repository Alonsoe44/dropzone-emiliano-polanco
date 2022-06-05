import { AiOutlineClose, AiFillFile } from "react-icons/ai";
interface PreviewFileProps {
  text: string;
  size: number;
  files: File[];
  action: (arg0: File[]) => void;
}

const PreviewFile = ({ text, size, action, files }: PreviewFileProps) => {
  return (
    <div className="border px-3 border-black z-50 relative flex justify-between rounded-xl w-full mb-1">
      <div className="flex">
        <AiFillFile className="mt-[2px] mr-3" />
        <p>{text}</p>
      </div>
      <div className="flex">
        <span>{size}</span>
        <AiOutlineClose
          className="text-xl text-error ml-3 mt-[2px]"
          onClick={() => action(files.filter((file) => file.name !== text))}
        />
      </div>
    </div>
  );
};

export default PreviewFile;
