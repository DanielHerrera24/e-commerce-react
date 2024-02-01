import { ScaleLoader } from "react-spinners";

function Loading({ isLoading }) {
  return (
    <>
      <ScaleLoader
        color="#034494"
        loading={isLoading}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </>
  );
}

export default Loading;
