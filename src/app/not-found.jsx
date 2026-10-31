import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="flex min-h-svh flex-col items-center justify-center px-4 text-center">
      <p className="font-display text-8xl font-bold text-gradient animate-gradient-x sm:text-9xl">
        404
      </p>
      <h1 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
        I have bad news for you
      </h1>
      <p className="mt-4 max-w-md text-slate-400">
        The page you are looking for might be removed or is temporarily
        unavailable.
      </p>
      <Link
        href="/"
        className="btn-shine mt-10 inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 px-6 py-3 font-medium text-white shadow-lg shadow-cyan-500/25"
      >
        <FaArrowLeft /> Back to homepage
      </Link>
    </section>
  );
}
