import InputNumber from "../Components/Input";

export const generateMatrixInputs = (length) => {
    const componentToShow = [];
    for(let i = 1; i <= length; i++){
        const childComponent = [];
        for(let j = 1; j <= length; j++){
            const key = 'a'+i+'b'+j;
            childComponent.push(<InputNumber key={key} name={key} disabled={false}/>);
        }
        componentToShow.push(
            <div key = {i} className="ligne">
                {childComponent}
            </div>
        )
    }
    return componentToShow;
}