import RotateLoader from "react-spinners/RotateLoader"; 
export default function Loading() {
    return (
      <div className="flex flex-wrap gap-2">
      <div className="text-center w-full h-full py-10 flex items-center justify-center">  
      <RotateLoader className="mx-auto" />
      </div>
    </div>
    )
  }


