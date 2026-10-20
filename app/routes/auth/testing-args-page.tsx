import { Link } from "react-router";
import { LoaderCircle } from "lucide-react";
import type { Route } from "./+types/testing-args-page";
import { sleep } from "~/lib/sleep";
export function meta() {
  return [
    { title: "Suport Chat" },
    {
      property: "og:title",
      content: "Support Chat",
    },
    {
      name: "description",
      content: "Es la app mejor",
    },
  ];
}

export function headers() {
  return {
    "X-Stretchy-Pants": "its for fun",
    "Cache-Control": "max-age=300, s-maxage=3600",
  };
}

export function links() {
  return [
    // {
    //   rel: "icon",
    //   href: "/favicon.png",
    //   type: "image/png",
    // },
    // {
    //   rel: "stylesheet",
    //   href: "https://example.com/some/styles.css",
    // },
    // {
    //   rel: "preload",
    //   href: "/images/banner.jpg",
    //   as: "image",
    // },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  console.log({ params });
  return { hola: "Mundo" };
}

export async function clientLoader({
  params,
  serverLoader,
}: Route.ClientLoaderArgs) {
  await sleep(1500);
  const datosDelServidor = await serverLoader();
  return { hola: "Mundo" };
}

export function HydrateFallback() {
  return (
    <div className="flex items-center justify-center gap-2 p-6" role="status">
      <LoaderCircle className="h-5 w-5 animate-spin" aria-hiddens="true" />
      <p>Cargando...</p>
    </div>
  );
}

clientLoader.hydrate = true as const;

export default function TestingArgsPage({
  loaderData,
  actionData,
  params,
  matches,
}: Route.ComponentProps) {
  const { id, name, age } = params;

  return (
    <div>
      <h1 className="font-bold text-2xl">Name: {name}</h1>
      <h1 className="font-bold text-2xl">Age: {age}</h1>
      <h1 className="font-bold text-2xl">id: {id}</h1>
      <p>Loader Data: {JSON.stringify(loaderData)}</p>
      <p>Action Data: {JSON.stringify(actionData)}</p>
      <p>Route Parameters: {JSON.stringify(params)}</p>
      <p>Matched Routes: {JSON.stringify(matches)}</p>

      <Link to="/auth/testing" className="underline text-blue-500 text-2xl">
        Volver
      </Link>
    </div>
  );
}
