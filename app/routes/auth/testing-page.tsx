
import { Form, Link, NavLink, useNavigation } from "react-router";
import type { Route } from "./+types/testing-page";
import { sleep } from "~/lib/sleep";


export async function action({ request }: Route.ActionArgs) {

  await sleep(1000);
  const data = await request.formData();
  const firstName = data.get("firstName");
  const edad = data.get("edad");
  console.log("Datos recibidos", { firstName, edad })
  return { ok: true };
}

export async function clientAction({ serverAction, request }: Route.ClientActionArgs) {

  await sleep(1000);
  const formData = await request.clone().formData();
  const allData = Object.fromEntries(formData);
  const data = await serverAction();

  return { message: "Hola mundo desde el cliente", data, allData };
}



export async function loader() {
  return { message: "Hola mundo desde el mundo desde Servidor Loader" };
}

export async function clientLoader({ serverLoader }: Route.ClientLoaderArgs) {
  // call the server loader
  const serverData = await serverLoader();

  return {
    message: "Hola mundo desde Cliente Loader ",
    serverData: serverData
  };
}
export default function TestingPage({
  loaderData,
  actionData,
  params,
  matches,
}: Route.ComponentProps) {

  const navigation = useNavigation();
  const isPosting = navigation.state === "submitting";

  console.log({ navigation, isPosting });
  return (
    <div>
      <h1 className="font-bold text-2xl">Testing page</h1>
      <p>Loader Data: {JSON.stringify(loaderData)}</p>
      <p>Action Data: {JSON.stringify(actionData)}</p>
      <p>Route Parameters: {JSON.stringify(params)}</p>
      <p>Matched Routes: {JSON.stringify(matches)}</p>
      <NavLink to="/auth/testing-args/abc-123/juan/25"
        className={({ isPending }) =>
          isPending
            ? "underline text-gray-500 text-2xl"
            : "underline text-blue-500 text-2xl"}>Volver</NavLink>

      <Form className="mt-2 flex gap-2" method="post">
        <input name="firstName"
          className="border-2 border-gray-300 rounded-md p-2 "
        />
        <input name="edad"
          className="border-2 border-gray-300 rounded-md p-2 "
        />
        <button type="submit" className="bg-blue-500 text-white rounded-md p-2" disabled={isPosting}>
          {isPosting ? "Enviando " : 'cargar'}
        </button>
      </Form>
    </div>
  );
}