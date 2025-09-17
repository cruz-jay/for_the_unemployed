```
import { headers } from "next/headers";

export default function Home() {
  const host = headers().get("host") || "This Site";

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-black text-center">
      <h1 className="text-4xl font-bold text-white">{host} domain for sale</h1>
      <p className="mt-4 text-2xl text-gray-300">Asking price: 1,000 USD</p>
      <p className="mt-4 text-xl text-gray-300">Contact:</p>
    </div>
  );
}


```
