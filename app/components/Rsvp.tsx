import React, { useState } from 'react';
import Modal from './Modal';
import { submitRsvp } from '@/app/actions/googleSheets';

const RsvpForm = ({ onClose }: { onClose: () => void }) => {
  const [name, setName] = useState('');
  const [attendance, setAttendance] = useState('');
  const [meal, setMeal] = useState('');
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const result = await submitRsvp({ name, attendance, meal, numberOfGuests });

    setIsSubmitting(false);
    if (result.success) {
      alert('성공적으로 제출되었습니다.');
      onClose();
    } else {
      alert('제출에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 items-center">
          <label className="block mb-1">성함</label>
          <input
            type="text"
            className="w-full border rounded px-2 py-1"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="grid grid-cols-2 items-center">
          <label className="block mb-1">참석여부</label>
          <div className="space-x-4">
            <label>
              <input
                type="radio"
                name="attendance"
                value="참석"
                checked={attendance === '참석'}
                onChange={(e) => setAttendance(e.target.value)}
                required
              />{' '}
              참석
            </label>
            <label>
              <input
                type="radio"
                name="attendance"
                value="불참"
                checked={attendance === '불참'}
                onChange={(e) => setAttendance(e.target.value)}
              />{' '}
              불참
            </label>
          </div>
        </div>
        <div className="grid grid-cols-2 items-center">
          <label className="block mb-1">식사여부</label>
          <div className="space-x-4">
            <label>
              <input
                type="radio"
                name="meal"
                value="식사"
                checked={meal === '식사'}
                onChange={(e) => setMeal(e.target.value)}
                required
              />{' '}
              식사
            </label>
            <label>
              <input
                type="radio"
                name="meal"
                value="미식사"
                checked={meal === '미식사'}
                onChange={(e) => setMeal(e.target.value)}
              />{' '}
              미식사
            </label>
          </div>
        </div>
        <div className="grid grid-cols-2 items-center">
          <label className="block mb-1">본인 포함 총 인원</label>
          <input
            type="number"
            className="w-full border rounded px-2 py-1"
            min="1"
            value={numberOfGuests}
            onChange={(e) => setNumberOfGuests(Number(e.target.value))}
            required
          />
        </div>
        <div className="flex justify-end space-x-2">
          <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 rounded">
            닫기
          </button>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded" disabled={isSubmitting}>
            {isSubmitting ? '제출 중...' : '참석 정보 전달하기'}
          </button>
        </div>
      </form>
    </div>
  );
};

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
