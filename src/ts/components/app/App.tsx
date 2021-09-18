// import { Form, Input, Button } from 'antd';
// import React, { useState } from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import RWDModal from './RWDModal';
// import './index.scss';
// import ImageUpload from './avatarUploader';
// import gameLogo from './logo.jpg';
// import Demo from './gameByURL';
// import Test from './Test';

// function App(): JSX.Element {
//   const [authorizationModal, setAuthorizationModal] = useState(false);
//   const onFinish = (values: any) => {
//     console.log('Success:', values);
//   };

//   const onFinishFailed = (errorInfo: any) => {
//     console.log('Failed:', errorInfo);
//   };

//   const toogleAuthorizationModal = () => {
//     setAuthorizationModal((authorizatonModalVisible) => !authorizatonModalVisible);
//   };

//   return (
//    <BrowserRouter>
//     <div className="app">
//       <img alt="" src={gameLogo} />
//       <h3 className="start-planning">Start your planning</h3>
//       <div className="text-button-group">
//         <span className="new-game-text">Create new session:</span>
//         <button className="button-modal" type="button" onClick={toogleAuthorizationModal}>
//           Start New Game
//         </button>
//         <p className="or">OR</p>
//         <div className="text-button-group">
//           <span>Connect to lobby by URL:</span>
//           <Demo />
//         </div>
//       </div>
//       <RWDModal
//         content={
//           <>
//             <Form
//               name="basic"
//               labelCol={{ span: 8 }}
//               wrapperCol={{ span: 16 }}
//               initialValues={{ remember: true }}
//               autoComplete="off"
//               className="modal-styles"
//               onClick={(e) => e.stopPropagation()}
//               onFinish={onFinish}
//               onFinishFailed={onFinishFailed}
//             >
//               <Form.Item
//                 label="Firstname"
//                 name="firstname"
//                 rules={[{ required: true, message: 'Please input your username!' }]}
//               >
//                 <Input className="modal-input" />
//               </Form.Item>
//               <Form.Item label="Surname" name="surname">
//                 <Input className="modal-input" />
//               </Form.Item>
//               <Form.Item id="mainApp">
//                 <ImageUpload />
//               </Form.Item>
//               <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
//                 <Button type="primary" htmlType="submit">
//                   Submit
//                 </Button>
//               </Form.Item>
//             </Form>
//           </>
//           }
//           isAuthorizationModalVisible={authorizationModal}
//           onBackDropClick={toogleAuthorizationModal}
//         />
//       </div>
//     </BrowserRouter>
//   );
// }

import React from 'react';
import Main from './Main';

function App(): JSX.Element {
  return <Main />;
}

export default App;
