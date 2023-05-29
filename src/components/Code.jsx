import { useContext } from 'react';

import Editor from "./Editor";


import { Box, styled } from "@mui/material";

import {DataContext} from "../context/DataProvider";

const Container = styled("Box")`
  display: flex;
  background: #060606;
`;

const Code = () => {
   const { html, css,js, setHtml,setCss,  setJs } = useContext(DataContext);

  return (
    <Container>
      <Editor
        heading="HTML"
        icon="/"
        color="#FF3C41"
        value={html}
        onChange={setHtml}
      />
      <Editor
        heading="CSS"
        icon="*"
        color="#0EBEFF"
        value={css}
        onChange={setCss}
      />
      <Editor
        heading="Javascript"
        icon="()"
        color="#FCD000"
        value={js}
        onChange={setJs}
      />
    </Container>
  );
};

export default Code;

// import { useContext } from 'react';

// //components
// import Editor from './Editor';

// import { Box, styled } from '@mui/material';

// import { DataContext } from '../context/DataProvider';

// const Container = styled(Box)`
//     background-color: #060606;
//     height: 50vh;
//     display: flex;
// `

// const Code = () => {

//     const { html, css, js, setHtml, setCss, setJs } = useContext(DataContext);

//     return (
//         <Container>
//             <Editor 
//                 language="xml"
//                 heading="HTML"
//                 value={html}
//                 onChange={setHtml}
//                 icon='/'
//                 color='#FF3C41'
//             />
//             <Editor 
//                 language="css"
//                 heading="CSS"
//                 value={css}
//                 onChange={setCss}
//                 icon='*'
//                 color='#0EBEFF'
//             />
//             <Editor 
//                 language="javascript"
//                 heading="JS"
//                 value={js}
//                 onChange={setJs}
//                 icon='( )'
//                 color='#FCD000'
//             />
//         </Container>
//     )
// }

// export default Code;