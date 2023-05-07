import { useState } from "react";
import axios from "axios";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";

function ModeComponent() {
    const queryClient = new QueryClient({});
    const [modeIsCloud, setModeIsCloud] = useState(false);
    const { isLoading, error, data } = useQuery("local", () =>
        axios.get("http://localhost:8000/")
    );

    const ToggleMode = () => {
        setModeIsCloud(!modeIsCloud);
    };

    const getCloudBasedWord = () => {
        return "cloud based";
    };

    const getLocalBasedWord = () => {
        console.log(data?.data);
        return isLoading ? "Loading from local host" : data?.data["Hello"];
    };
    return (
        <>
            <button onClick={ToggleMode}>Change mode</button>
            <h3>
                mode is :{" "}
                {modeIsCloud ? getCloudBasedWord() : getLocalBasedWord()}
            </h3>
        </>
    );
}

export default ModeComponent;
