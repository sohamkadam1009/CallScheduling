export default function Page({ Left, Right }) {
  return (
    <div
      className="app-container"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        minHeight: "100vh",
        backgroundColor: "#000",
      }}
    >
      {Left}
      {Right}
    </div>
  );
}
