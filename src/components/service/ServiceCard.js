import { BsFillTrashFill } from 'react-icons/bs'
import styles from '../project/ProjectCard.module.css'

function ServiceCard({ id, name, cost, description, handleRemovee }) {
    const remove = (e) => {

    }
    return (
        <div className={styles.project_card}>
            <h4>{name}</h4>
            <p><span>Custo Total:</span> R${cost}</p>
            <p>{description}</p>
            <div className={styles.project_card_actions}>
                <button onClick={remove}>
                    <BsFillTrashFill></BsFillTrashFill>Excluir
                </button>
            </div>
        </div>
    )
}
export default ServiceCard