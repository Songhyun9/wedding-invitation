import React, { useState } from 'react';

export const AccountAccordion = () => {
  return (
    <div className="join join-vertical w-full px-10 gap-3 pb-24">
      <div className="collapse collapse-arrow border border-base-300 bg-white rounded-md">
        <input type="checkbox" className="peer" />
        <div className="collapse-title font-medium border-b border-base-300">신랑측</div>
        <div className="collapse-content peer-checked:bg-white">
          <div className="flex flex-col gap-4 pt-4">
            <AccountItem name="신랑 이등록" relation="카카오뱅크" account="3333-07-5666929" />
            <AccountItem name="어머니 최재숙" relation="농협" account="1711-2056-066227" />
          </div>
        </div>
      </div>
      <div className="collapse collapse-arrow border border-base-300 bg-white rounded-md">
        <input type="checkbox" className="peer" />
        <div className="collapse-title font-medium border-b border-base-300">신부측</div>
        <div className="collapse-content peer-checked:bg-white">
          <div className="flex flex-col gap-4 pt-4">
            <AccountItem name="신부 유하진" relation="국민" account="98893453445" />
          </div>
        </div>
      </div>
    </div>
  );
};

const AccountItem = ({ name, relation, account }: { name: string; relation: string; account: string }) => {
  const [copyStatus, setCopyStatus] = useState('');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(account);
      setCopyStatus('복사 완료');
      setTimeout(() => setCopyStatus(''), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
      setCopyStatus('복사 실패');
    }
  };

  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="font-bold">{name}</p>
        <p className="text-sm">
          {relation} {account}
        </p>
      </div>
      <div className="flex gap-2 items-center">
        <button className="btn btn-sm btn-ghost" onClick={handleCopy}>
          {copyStatus || '복사'}
        </button>
      </div>
    </div>
  );
};
