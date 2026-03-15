import { Suspense } from "react";
import Countries from "./Components/Countries/Countries";

let getData = fetch("https://openapi.programming-hero.com/api/all").then(
  (data) => data.json(),
);
function App() {
  return (
    <>
      <section className="container mx-auto my-8 px-5">
        <Suspense fallback={<p>Please wait you data is loading</p>}>
          <Countries getData={getData}></Countries>
        </Suspense>
      </section>
    </>
  );
}

export default App;
