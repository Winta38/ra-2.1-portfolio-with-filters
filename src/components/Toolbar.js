import Button from "./Button";

export default function Toolbar(props) {
    const { filters, selected } = props;
    return (
        <div className="toolbar">
            {filters.map((btn) => <Button
                btn={btn}
                selected={selected}
                onSelectFilter={props.onSelectFilter}
            />)}
        </div>
    )
}