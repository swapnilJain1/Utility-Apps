import useFetch from "../hooks/useFetch"

function GetData() {
    const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users');

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>An error occurred: {error}</div>;
    }


    return (
        <div>
            {data.length>0 ? <h1>{data?.title}</h1> : <h3>No Data found</h3>}
        </div>
    );
}
export default GetData