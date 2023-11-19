
function BookList1(){
}

//or 
const BookList = (props) =>{
    const books = [
        {id:1, title:'Book1', author:'Author1'},
        {id:2, title:'Book2', author:'Author2'},
        {id:3, title:'Book3', author:'Author3'}
    ];

    return(
        <div>
            <h2>Book List</h2>
            <h2>Props: {props.name}</h2>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>{book.title} by {book.author}</li>
                ))}
            </ul>
        </div>
    )
}

export default BookList;