// import react,{useState, useEffect} from "react";

// const Info = () => {
//     const [name, setName] = useState('');
//     const [nickname, setNickname] = useState('');
//     useEffect(() => {
//     //   console.log('렌더링이 완료되었습니다!');
//     //   console.log({
//     //     name,
//     //     nickname
//     //   });

//     // console.log('마운트될 때만 실행됩니다.');
//     // });

//     // console.log(name);
//     // }, [name]);

//     console.log('effect');
//     console.log(name);
//     return () => {
//       console.log('cleanup');
//       console.log(name);
//     };
//   }, []);

//     const onChangeName = e => {
//       setName(e.target.value);
//     };
   
//     const onChangeNickname = e => {
//       setNickname(e.target.value);
//     };
   
//     return (
//       <div>
//         <div>
//           <input value={name} onChange={onChangeName} />
//           <input value={nickname} onChange={onChangeNickname} />
//         </div>
//         <div>
//           <div>
//             <b>이름:</b> {name}
//           </div>
//           <div>
//             <b>닉네임:</b> {nickname}
//           </div>
//         </div>
//       </div>
//     );
//   };

import React, { useReducer } from 'react';
  
function reducer(state, action) {
    return {
      
      [action.name]: action.value
    };
  }
  
  
  
  const Info = () => {
    const [state, dispatch] = useReducer(reducer, {
      name: '',
      nickname: ''
    });
    const { name, nickname } = state;
    const onChange = e => {
      dispatch(e.target);
    };
  
  
  
  return (
      <div>
        <div>
          <input name="name" value={name} onChange={onChange} />
          <input name="nickname" value={nickname} onChange={onChange} />
        </div>
        <div>
          <div>
            <b>이름:</b> {name}
          </div>
          <div>
            <b>닉네임: </b>
            {nickname}
          </div>
        </div>
      </div>
    );
  };
  
   


  
  export default Info;