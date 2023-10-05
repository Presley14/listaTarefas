import styles from "./Input.module.css"

function Input({ texto, name, value, onChange, placeholder, required }) {
    return(
        <input className={styles.input}
        type={texto} 
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        />
    )
}

export default Input
