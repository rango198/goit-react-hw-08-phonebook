// import { Formik } from 'formik';
// import { ButtonUpdate, Formstyled, Input } from './ModalForm.styled';

// export const ModalForm = ({ initialValues, onSubmit }) => {
//   const handleSubmit = values => {
//     onSubmit(values);
//   };
//   return (
//     <Formik initialValues={initialValues} onSubmit={handleSubmit}>
//       {({ isSubmitting }) => (
//         <Formstyled>
//           <label htmlFor="username">
//             Name
//             <Input id="username" name="name" type="text" autoComplete="off" />
//           </label>
//           <br />
//           <label htmlFor="usernumber">
//             Phone
//             <Input
//               id="usernumber"
//               name="number"
//               type="tel"
//               autoComplete="off"
//             />
//           </label>
//           <br />
//           <label htmlFor="useraddress">
//             Address
//             <Input
//               id="useraddress"
//               name="address"
//               type="text"
//               autoComplete="off"
//             />
//           </label>
//           <ButtonUpdate type="submit" disabled={isSubmitting}>
//             Update
//           </ButtonUpdate>
//         </Formstyled>
//       )}
//     </Formik>
//   );
// };
