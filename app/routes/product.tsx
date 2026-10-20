import React from "react";
import { ArrowRight, Package } from "lucide-react";
import type { Route } from "./+types/product";

export async function loader({ params }: Route.LoaderArgs) {
  const name = params.name ?? "Producto";

  return {
    name: name.toUpperCase(),
  };
}
const ProductPage = ({ loaderData }: Route.ComponentProps) => {
  const { name } = loaderData;

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-12">
      <section className="w-full max-w-xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60">
        <div className="h-2 bg-gradient-to-r from-violet-500 via-indigo-500 to-sky-400" />
        <div className="p-8 sm:p-10">
          <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-700">
            <Package aria-hidden="true" size={28} />
          </div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
            Detalle del producto
          </p>
          <h1 className="break-words text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {name}
          </h1>
          <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600">
            Ver información
            <ArrowRight aria-hidden="true" size={16} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductPage;
