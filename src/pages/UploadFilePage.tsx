import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { FaCloudUploadAlt } from "react-icons/fa";

const UploadFilePage = () => {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    console.log(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });
  return (
    <div className="bg-bgColor w-full h-screen flex relative z-10 justify-center font-bebas">
      <div className="flex flex-col w-8/12 pt-40">
        <h1 className="text-textColor text-5xl pb-10">Upload a file</h1>
        <div
          {...getRootProps()}
          className="bg-lightGray h-[20rem] w-full border-4 rounded-xl flex justify-center items-center before:bg-black before:-z-10 before:absolute before:left-4 before:top-4
         relative before:w-full before:rounded-xl before:h-full"
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <div className="flex flex-col text-center items-center text-xl">
              <p>Drag and drop some files here, or click to select them</p>
              <FaCloudUploadAlt className="text-2xl w-10" />
            </div>
          )}
        </div>
        <button
          className="bg-accent text-2xl text-textColor h-[3rem] w-80 border-black border-2 rounded-xl flex justify-center items-center before:bg-black before:-z-10 before:absolute before:left-1 before:top-1
         relative before:w-full before:rounded-xl before:h-full self-end mt-10"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default UploadFilePage;
