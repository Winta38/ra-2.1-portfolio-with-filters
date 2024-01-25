export default function Button({ btn, selected, onSelectFilter }) {
    let select = false;
    console.log(btn, selected)
    if (btn === selected) {
        select = true;
    }
    return (
        <button className={select ? 'btn select' : 'btn'} onClick={() => onSelectFilter(btn)}>{btn}</button>
    )
}