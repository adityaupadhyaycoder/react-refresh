import { useRouteError } from "react-router-dom";

const Error = () => {
    const errObj = useRouteError();
    console.log(errObj)
    return (
        <div> 
            <div>Provided routes not found</div>
            <div> {errObj?.status}</div>
        </div>
    )
}

export default Error;