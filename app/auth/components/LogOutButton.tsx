import { Form } from "react-router";
import { Button } from "~/components/ui/button";

export function LogoutButton() {
    return (
        <Form action="/auth/logout" method="post">



            <Button
                type="submit"
                variant={"default"}
                className=" w-full  hover:bg-black-700 transition"
            >
                Cerrar sesión
            </Button>

        </Form >
    );
}