import { useRouteError } from "react-router";
import { OuterContainer } from "@layouts/OuterContainer";
import Error from "@pages/general/Error";

export const ErrorRoute = () => {
    const errorData = useRouteError();

    return (
        <OuterContainer>
            <Error errorData={errorData} />
        </OuterContainer>
    );
};