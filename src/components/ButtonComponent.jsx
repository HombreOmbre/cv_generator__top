export default function ButtonComponent({nameOfClass, propsFunc, btnTxt}) {
    return (
        <button className={nameOfClass + '__btn'} onClick={propsFunc}>
            {btnTxt}
        </button>
    );
}