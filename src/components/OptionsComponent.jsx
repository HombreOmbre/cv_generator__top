import ButtonComponent from "./ButtonComponent.jsx";
import '../styles/OptionsComponent.scss';


export default function OptionsComponent(
    {
        resetAllData,
        saveAllData
    }) {

    return (
        <div className="options-component-container">
            <ButtonComponent
                nameOfClass={'options-component-container'}
                propsFunc={resetAllData}
                btnTxt={'Reset data'}
            />
            <ButtonComponent
                nameOfClass={'options-component-container'}
                propsFunc={saveAllData}
                btnTxt={'Save'}
            />
        </div>
    );
}