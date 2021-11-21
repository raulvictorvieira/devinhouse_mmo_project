import Loader from "react-loader-spinner";

export const LoaderComp = () => {
    return (
      <Loader
        type="ThreeDots"
        color="orange"
        height={50}
        width={50}
        timeout={3000}
      />
    );
}