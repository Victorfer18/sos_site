import { CircularProgress } from "@nextui-org/react";

export default function Loading({ children, isLoading = false }) {
  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute flex justify-center items-center h-full w-full">
          <CircularProgress color="danger" aria-label="Loading..." />
        </div>
      )}
      <div
        className={`transition-all ${isLoading ? "opacity-10" : "opacity-100"}`}
      >
        {children}
      </div>
    </div>
  );
}
