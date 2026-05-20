type NetworkLoadingState = {
    state: "loading"; // state is always type of "loading" when the network request is in progress
};

type NetworkFailedState = {
    state: "failed"; // state is always type of "failed" when the network request has failed
    error: string;
    code: number;
};

type NetworkSuccessState = {
    state: "success";
    data: any;
    response:{
        status: number;
        title: string;
        headers: Record<string, string>;
        duration: number;
        summary: string;
    }
};


type NetworkState = //discriminating union type for network states based on the 'state' property
     NetworkLoadingState 
    | NetworkFailedState 
    | NetworkSuccessState; 

    

function handleNetworkState(networkState: NetworkState) {
    switch (networkState.state) { //discriminating union using the 'state' property
        case "loading":
            return "Network request is loading...";
        case "failed":
            return `Error: ${networkState.error}, Code: ${networkState.code}`;
        case "success":
            return `DownLoading ${networkState.response.summary} with status ${networkState.response.status} and title ${networkState.response.title}`;
        default:
            const exhaustiveCheck: never = networkState;
            throw new Error(`Unhandled network state: ${exhaustiveCheck}`);
    }
}

// Example usage:
const loadingState: NetworkState = { state: "loading" };
const failedState: NetworkState = { state: "failed", error: "Network error", code: 500 };

handleNetworkState(loadingState);
handleNetworkState(failedState);


//ex.2 

function logger (networkState : NetworkState) {
    switch(networkState.state){
        case "loading":
            return "Loading...";
        case "failed":
            return `Failed with error: ${networkState.error} and code: ${networkState.code}`;
        case "success":
            return `Success with data: ${JSON.stringify(networkState.data)} and response: ${JSON.stringify(networkState.response)}`;
        default:
            const exhaustiveCheck: never = networkState;
            throw new Error(`Unhandled network state: ${exhaustiveCheck}`);
    }
}

const successState: NetworkState = {
    state: "success",
    data: { message: "Data loaded successfully" },
    response: {
        status: 200,
        title: "OK",
        headers: { "Content-Type": "application/json" },
        duration: 150,
        summary: "Request completed successfully"
    }
};

console.log(logger(successState));






