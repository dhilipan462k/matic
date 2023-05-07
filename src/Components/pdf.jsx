// import React from "react";
// import * as html2pdf from "html2pdf.js";

// function PDF({ url }) {
//   console.log(url);
//   const handleClick = async () => {
//     const element = document.createElement("div");
//     const response = await fetch(url);
//     const html = await response.text();
//     element.innerHTML = html;
//     html2pdf().from(element).save();
//   };

//   return <button onClick={handleClick}>Download as PDF</button>;
// }

// export default PDF;
// import * as React from "react";
// import * as ReactDomClient from "react-dom/client";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";

// import { ClassComponent } from "./examples/ClassComponent";
// import { ClassComponentContextConsumer } from "./examples/ClassComponentContextConsumer";
// import { ClassComponentText } from "./examples/ClassComponentText";
// import { FunctionalComponent } from "./examples/FunctionalComponent";
// import { FunctionalComponentWithHook } from "./examples/FunctionalComponentWithHook";
// import { FunctionalComponentWithFunctionalComponentToPrint } from "./examples/FunctionalComponentWFunctional";
// import "./example.css";

// class Example extends React.Component {
//   render() {
//     return (
//       <Tabs>
//         <TabList>
//           <Tab>Class Component</Tab>
//           <Tab>Functional Component</Tab>
//           <Tab>Raw Values</Tab>
//         </TabList>
//         <TabPanel>
//           <Tabs>
//             <TabList>
//               <Tab>Standard</Tab>
//               <Tab>With ContextConsumer</Tab>
//             </TabList>
//             <TabPanel>
//               <ClassComponent />
//             </TabPanel>
//             <TabPanel>
//               <ClassComponentContextConsumer />
//             </TabPanel>
//           </Tabs>
//         </TabPanel>
//         <TabPanel>
//           <Tabs>
//             <TabList>
//               <Tab>Standard</Tab>
//               <Tab>With Hook</Tab>
//               <Tab>With a functional ComponentToPrint</Tab>
//             </TabList>
//             <TabPanel>
//               <FunctionalComponent />
//             </TabPanel>
//             <TabPanel>
//               <FunctionalComponentWithHook />
//             </TabPanel>
//             <TabPanel>
//               <FunctionalComponentWithFunctionalComponentToPrint />
//             </TabPanel>
//           </Tabs>
//         </TabPanel>
//         <TabPanel>
//           <Tabs>
//             <TabList>
//               <Tab>Text</Tab>
//             </TabList>
//             <TabPanel>
//               <ClassComponentText />
//             </TabPanel>
//           </Tabs>
//         </TabPanel>
//       </Tabs>
//     );
//   }
// }

// const container = document.getElementById("app-root");
// const root = ReactDomClient.createRoot(container);
// root.render(<Example />);

import React, { useRef } from "react";
import ReactToPrint from "react-to-print";

// // import { ComponentToPrint } from "./ComponentToPrint";
// export class ComponentToPrint extends React.PureComponent {
//   render() {
//     return <div>My cool content here!</div>;
//   }
// }

// Using a functional component, you must wrap it in React.forwardRef, and then forward the ref to
// the node you want to be the root of the print (usually the outer most node in the ComponentToPrint)
// https://reactjs.org/docs/refs-and-the-dom.html#refs-and-function-components
// export const ComponentToPrint = React.forwardRef((props, ref) => {
//   return <div ref={ref}>My cool content here!</div>;
// });
const Example = () => {
  const componentRef = useRef();

  return (
    <div>
      <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
      />
      {/* <ComponentToPrint ref={componentRef} /> */}
    </div>
  );
};
export default Example;
