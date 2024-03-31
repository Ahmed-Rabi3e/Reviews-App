import Review from "./Review";

function App() {
  return (
    <main>
      <section className="w-[80vw] max-w-[620px]">
        <div className="text-center mb-20">
          <h2 className="text-5xl capitalize font-semibold font-mono mb-2">
            our reviews
          </h2>
          <div className="h-1 w-20 bg-cofy mx-auto"></div>
        </div>
        <Review />
      </section>
    </main>
  );
}

export default App;
