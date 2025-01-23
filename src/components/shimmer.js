function ShimmerUi() {
    return (
        <div className="resturant-list">
            {Array(10).fill("").map((e,index) => <div className="shimmer-card" key={index}></div>)}
        </div>
    )
}

export default ShimmerUi;