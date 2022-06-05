import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FaCloudUploadAlt } from "react-icons/fa";
import PreviewFile from "../previewFile/PreviewFile";

function getUnion(array1, array2) {
  const difference = array1.filter((element) => !array2.includes(element));
  return [...difference, ...array2];
}

const UploadForm = () => {
  const [files, setFiles] = useState([]);
  const onDrop = useCallback(
    (newFiles) => {
      const allFiles = [...files, ...newFiles];
      const unionNamesFiles = getUnion(
        files.map((file) => file.name),
        newFiles.map((file) => file.name)
      );
      const noRepeatedFiles = unionNamesFiles.map((name) =>
        allFiles.find((file) => file.name === name)
      );
      setFiles(noRepeatedFiles);
    },
    [files]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });
  return (
    <form className="flex flex-col lg:w-8/12 sm:w-10/12  pt-40">
      <h1 className="text-textColor text-5xl pb-10">Upload a file</h1>
      <div
        {...getRootProps()}
        className={`bg-lightGray h-[20rem] w-full border-4 rounded-xl flex ${
          files ? "flex-row justify-around" : "justify-center"
        } items-center before:bg-black before:-z-10 before:absolute before:left-4 before:top-4 relative before:w-full before:rounded-xl before:h-full" +
         `}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <>
            {files[0] && (
              <ul className="w-1/2 p-5">
                {files.map((file) => (
                  <PreviewFile
                    key={file.name}
                    text={file.name}
                    action={setFiles}
                    files={files}
                    size={file.size}
                  />
                ))}
              </ul>
            )}
            <div className="flex flex-col text-center items-center text-xl">
              <p className="sm:w-full w-1/2">
                Drag and drop some files here, or click to select them
              </p>
              <FaCloudUploadAlt className="text-4xl w-10 mt-3" />
            </div>
          </>
        )}
      </div>
      <button
        type="button"
        className="bg-accent text-2xl text-textColor h-[3rem] w-80 border-black border-2 rounded-xl flex justify-center items-center before:bg-black before:-z-10 before:absolute before:left-1 before:top-1
         relative before:w-full before:rounded-xl before:h-full self-end mt-10"
      >
        Submit
      </button>
    </form>
  );
};

export default UploadForm;
