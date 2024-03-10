import Spinner from '../../../../components/Spinner/Spinner';

function ErrorCard({ apiName, loading }) {
  return (
    <div
      key={apiName}
      className="flex flex-col items-center w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white bg-opacity-75 shadow-inner border hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-default py-4 px-6 text-gray-700"
      style={{
        clipPath:
          'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)',
      }}
    >
      {loading ? (
        <Spinner className="absolute right-2 top-2" />
      ) : (
        <span className="h-4 w-4 absolute right-2 top-2 rounded-full bg-red-800" />
      )}
      <h2 className="font-bold">{apiName}</h2>
      <div className="w-full h-full flex flex-col items-center justify-center gap-3">
        <p className="text-white font-bold px-10 py-2 bg-red-800">ERROR</p>
        <p className="text-red-800  px-10 py-2 bg-white">OUTAGE</p>
      </div>
    </div>
  );
}

export default ErrorCard;
