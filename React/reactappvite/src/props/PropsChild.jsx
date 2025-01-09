//import PropsDemoPage from "./PropsDemoPage";

const PropsChild = (value) => {

    console.log(value)
    console.log(value.data)

    return (
        <div>
            <h2>propsChild {value.data}</h2>
            <form >
                <label htmlFor="">Username</label>
                <input type="text"></input><br /><br />
                <label htmlFor="">Password</label>
                <input type="text" /><br /><br />
                <button type="">Submit</button>
            </form>

        </div>
        

    )
}

export default PropsChild;