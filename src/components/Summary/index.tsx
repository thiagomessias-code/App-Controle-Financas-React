import { Container } from "./style";
import imgIcon from '../../assets/android-icon-48x48.png'



export function Summary() {
    return (
        <Container>
           <div>
               <header>
                   <p>Entradas</p>
                   <img src={imgIcon} alt="" />
               </header>
               <strong>1000,00</strong>
           </div>
           <div>
               <header>
                   <p>Saidas</p>
                   <img src={imgIcon} alt="" />
               </header>
               <strong>1000,00</strong>
           </div>
           <div className="title">
               <header>
                   <p>Entradas</p>
                   <img src={imgIcon} alt="" />
               </header>
               <strong>1000,00</strong>
           </div>
        </Container>
    )
} 