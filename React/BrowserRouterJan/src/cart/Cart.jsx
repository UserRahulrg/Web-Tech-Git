import styles from "./Cart.module.css"

const Cart = ()=>{

    let i=0;
    let number = 0;

    for (i=0; i<=100; i++){

        number = number +1;
        setTimeout(1000)
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      
      async function loopWithSleep() {
        for (let i = 0; i < 5; i++) {
          console.log(`Iteration ${i}`);
          await sleep(1000);
        }
      }
      
      loopWithSleep();

    return(
        <div id={styles.cartDiv}>
            <h2>Cart is Empty!!</h2>
            {/* <h3 >Loaading..{number}</h3> */}

        </div>
    )
}

export default Cart;