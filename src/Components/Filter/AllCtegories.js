import Filter from "./Filter";

const AllCategories = () => {
    return (
        <div>
            <h1>What clothes do you prefer?</h1>
            {['DRESSES', 'PANTS', 'SHOES', 'SKIRTS', 'ALL']
            .map(category => <Filter category={category}/>
            )}
        </div>
    )
}

export default AllCategories;