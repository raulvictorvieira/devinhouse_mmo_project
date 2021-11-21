import React from 'react';
import { StyledForm } from "./Form.styles";

const initialList = [];

export const Form = () => {
    const [value, setValue] = React.useState('');
    const [list, setList] = React.useState(initialList);

    const handleChange = event => {
        setValue(event.target.value);
    };

    const handleSubmit = event => {
        if (value) {
            setList(list.concat(value));
        }

        setValue('');

        event.preventDefault();
    };

    return (
        <div>
                <h3><i class="fas fa-comment-dots"></i>Comentários</h3>
                <form onSubmit={handleSubmit}>
                    <textarea type="text" value={value} onChange={handleChange} placeholder="Deixe aqui seu comentário!"></textarea>
                    {/* <input type="text" value={value} onChange={handleChange} /> */}
                    <button type="submit">Enviar</button>
                </form>
            

                <ul>
                    {list.map(item => (
                        <li key={item}>{item}</li>
                    ))}
                 </ul>
        </div>
    );
};






// import React from "react";
// import { StyledForm } from "./Form.styles";

// export const Form = () => {

//     return (
//         <>
//             <StyledForm>
//                 <h3><i class="fas fa-comment-dots"></i>Comentários</h3>
//                 <form>
//                     <label>
//                     <input type="text" name="name" placeholder="Nome"></input>
//                     <input type="text" name="email" placeholder="E-mail"></input>
//                     </label>
//                     <textarea placeholder="Deixe aqui seu comentário!"></textarea>
//                     <button type="submit">Enviar</button>
//                 </form>
//             </StyledForm>
//         </>
//     );
// };