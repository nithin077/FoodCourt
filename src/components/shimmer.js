function ShimmerUi() {
  return (
    <div className="flex flex-wrap m-10 gap-8 justify-center " data-testid="shimmer">
      {Array(8)
        .fill("")
        .map((e, index) => {
          return (
            <div className="w-72" key={index}>
              <div className="w-72 h-44 bg-zinc-300 mb-1"></div>
              <div className="w-72 h-8 bg-zinc-300 mb-3"></div>
            </div>
          );
        })}
    </div>
  );
}

export default ShimmerUi;
