import type { Rendezes_props } from "../../Models/Types/Rendezes.type";
export const Rendezes = function (props: Rendezes_props) {
    return (
        <form>
            <div className="input-group">
                <label htmlFor="orderCheckbox">Szeretnel rendezest beallitani?</label>
                <input onChange={() => {
                    if (props.rendezes) {
                        props.changeRendezes(false)
                    } else {
                        props.changeRendezes(true)
                    }
                }} type="checkbox" name="order" id="orderCheckbox" checked={props.rendezes} />
            </div>
            {props.rendezes && (
                <div className="input-group">
                    <label htmlFor="ascRadio">Novekvo</label>
                    <input onChange={()=>{
                        if (props.novekvo != "asc") {props.changeOrder("asc")}
                    }} type="radio" name="novekvo" checked={props.novekvo == "asc"} id="ascRadio" />
                    <label htmlFor="descRadio">Csokkeno</label>
                    <input onChange={()=>{
                        if (props.novekvo != "desc") {props.changeOrder("desc")}
                    }} type="radio" name="novekvo" checked={props.novekvo == "desc"} id="descRadio" />
                </div>
            )}
        </form>
    )
};