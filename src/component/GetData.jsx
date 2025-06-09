import useFetch from "../hooks/useFetch"

function GetData() {
    // Destructure the error and loading states from the hook
    const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users');

    if (loading) {
        return <div>Loading...</div>;
    }

    // Check for the error state and render a message
    if (error) {
        return <div>An error occurred: {error}</div>;
    }

    // Only render the data if there is no loading and no error
    return (
        <div>
            {/* Safely render your data here */}
            <h1>{data?.title}</h1>
        </div>
    );
}
export default GetData