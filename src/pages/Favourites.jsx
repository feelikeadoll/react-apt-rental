import { ListItem } from "../components/ListItem";


function Favourites(props) {
    console.log(props.favourites)

    return (
        <>
            <div className="page">
                {props.favourites.length === 0
                    ? <h2>You haven't added any apartments</h2>
                    : <h2>Favourite apartments</h2>
                }
            </div>
            <div className="list">
                {props.favourites.length > 0 &&
                    props.favourites.map((element) => {
                        return <ListItem
                        key={element.id}
                        appartment={element}
                        function={props.deleteAppartment}
                        handleAddFavourites={props.handleAddFavourites}
                      />
                    })
                }
            </div>
        </>
    )
}

export default Favourites;