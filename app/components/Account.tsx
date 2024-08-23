import React, { useState } from 'react';
import { AccountAccordion } from './AccountAccordion';

export const Account = () => {
  return (
    <div className="pt-10 mb-16 flex flex-col gap-10 font_gowun_dodum">
      <p className="font_parisienne text-[#d099a1] tracking-[.20em] text-center">Account</p>
      <p className="font-extrabold text-lg w-full text-center">마음 전하실 곳</p>
      <p className="w-full text-center leading-8">
        참석이 어려워 직접 축하를 전하지 못하는 <br />
        분들을 위해 계좌번호를 기재하였습니다
        <br />
        넓은 마음으로 양해 부탁드립니다
        <br />
        전해주시는 진심은 소중하게 간직하여
        <br /> 좋은 부부의 모습으로 보답하겠습니다
      </p>
      <AccountAccordion />
    </div>
  );
};
