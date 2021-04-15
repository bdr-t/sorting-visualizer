const SortingVisalizer = () => {
    const barsArray = [];
    for (let i = 0; i < 95; i++) {
      barsArray.push(randomIntFromInterval(1, 100));
    }
  let content = barsArray.map((value, idx) => (
    <div
      className="array-bar"
      key={idx}
      style={{
        alignSelf: "flex-end",
        width: "10px",
        backgroundColor: "green",
        height: `${value}%`,
      }}
    ></div>
  ));
  return (
    <div
      style={{
        placeSelf: "center",
        height: "60%",
        width: "70%",
        backgroundColor: "lightgray",
        display: "flex",
        gap: "0.1em",
      }}
    >
      {content}
    </div>
  );
};

function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

export default SortingVisalizer;
