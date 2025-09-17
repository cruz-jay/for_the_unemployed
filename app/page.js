import { headers } from "next/headers";

export default function Home() {
  let host = headers().get("host") || "unknown";

  if (host.startsWith("www.")) {
    host = host.slice(4);
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black px-4 text-center">
      <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
        {host} Domain For Sale
      </h1>
      <ul>
        <li className="mt-4 text-xl text-gray-300 sm:text-2xl">
          Asking Price: 1,500 USD
        </li>
        <li className="mt-4 text-xl text-gray-300 sm:text-2xl">
          Contact: contact@headspaceandtiming.com
        </li>
      </ul>
    </div>
  );
}
