import React, { useState } from 'react';
import Modal from './Modal'; // 이전에 만든 재사용 가능한 Modal 컴포넌트

const RsvpForm = ({ onClose }: { onClose: () => void }) => (
  <div className="w-full">
    <form className="space-y-4">
      <div className="grid grid-cols-2 items-center">
        <label className="block mb-1">성함</label>
        <input type="text" className="w-full border rounded px-2 py-1" />
      </div>
      <div className="grid grid-cols-2 items-center">
        <label className="block mb-1">참석여부</label>
        <div className="space-x-4">
          <label>
            <input type="radio" name="attendance" /> 참석
          </label>
          <label>
            <input type="radio" name="attendance" /> 불참
          </label>
        </div>
      </div>
      <div className="grid grid-cols-2 items-center">
        <label className="block mb-1">식사여부</label>
        <div className="space-x-4">
          <label>
            <input type="radio" name="meal" /> 식사
          </label>
          <label>
            <input type="radio" name="meal" /> 미식사
          </label>
        </div>
      </div>
      <div className="grid grid-cols-2 items-center">
        <label className="block mb-1">본인 포함 총 인원</label>
        <input type="number" className="w-full border rounded px-2 py-1" min="1" />
      </div>
      <div className="flex justify-end space-x-2">
        <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 rounded">
          닫기
        </button>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          참석 정보 전달하기
        </button>
      </div>
    </form>
  </div>
);

export const Rsvp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="pt-10 mb-16 flex flex-col gap-10 font_gowun_dodum">
      <p className="font_parisienne text-[#d099a1] tracking-[.20em] text-center">Rsvp</p>
      <p className="font-extrabold text-lg w-full text-center">참석 정보</p>
      <p className="w-full text-center leading-8">
        원활한 진행을 위해 <br />
        참석여부를 전달해주시면 감사하겠습니다
      </p>
      <div className="flex items-center justify-center">
        <button
          className="p-4 text-sm border-solid font_gowun_dodum border-[#eee] border min-w-48 rounded-sm bg-[#f9f9f9]"
          onClick={openModal}
        >
          참석 정보 전달하기
        </button>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <RsvpForm onClose={closeModal} />
      </Modal>
    </div>
  );
};
