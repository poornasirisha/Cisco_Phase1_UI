import { useQuery} from 'react-query';

const getData = async() => {
    const response = await fetch('http://localhost:5000/api/products');
    const data = response.json();

    return data;
}

const ReactQueryComponent = () => {
    const {data, isLoading, error} = useQuery('data', getData);

    if(isLoading) return <p>Loading...</p>

    return(
        <div>
            <ul>
                {data.map(item => {
                    <li key={item.id}>{item.name}</li>
                })}
            </ul>
        </div>
    )
}

export default ReactQueryComponent;