import Wrapper from "./components/Wrapper";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Wrapper />
    </Suspense>
  );
}
