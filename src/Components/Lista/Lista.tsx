import type { Lista_type } from "../../Models/Types/Lista.type"
import type { Telefon_type } from "../../Models/Types/Telefon.type"

export const Lista = function (props: Lista_type) {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nev</th>
                    <th>Gyarto</th>
                    <th>Ar</th>
                    <th>Memoria</th>
                </tr>
            </thead>
            <tbody>
                {props.telefonok.map((telefon: Telefon_type) => (
                    <tr key={telefon.id}>
                        <td>{telefon.id.toFixed()}</td>
                        <td>{telefon.nev}</td>
                        <td>{telefon.gyarto}</td>
                        <td>{telefon.ar.toString()}</td>
                        <td>{telefon.memoria.toFixed()}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}