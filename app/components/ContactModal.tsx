import React from 'react';
import Image from 'next/image';
import { Phone, Mail } from 'lucide-react';

const ContactModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  const CONTEXT_LIST = [
    { title: '신랑', name: '이등록', phoneNumber: '010-9759-1229' },
    {
      title: '신부',
      name: '유하진',
      phoneNumber: '010-8893-4534',
    },
    { title: '', name: '', phoneNumber: '' },
    {
      title: '신부 아버지',
      name: '유종표',
      phoneNumber: '010-2305-9111',
    },
    { title: '신랑 어머니', name: '최재숙', phoneNumber: '010-7224-5116' },
    {
      title: '신부 어머니',
      name: '송경란',
      phoneNumber: '010-7275-2222',
    },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white p-6 rounded-lg max-w-sm w-full" onClick={(e) => e.stopPropagation()}>
        <div className="grid grid-cols-2 gap-4 font_gowun_dodum">
          {CONTEXT_LIST.map((person, index) => (
            <div key={index} className="text-center flex flex-col gap-1">
              <p className=" text-sm">{person.title}</p>
              <p className="font-semibold">{person.name}</p>
              {person.phoneNumber && (
                <div className="flex justify-center mt-1">
                  <a href={`tel:${person.phoneNumber}`} className="p-1">
                    <Phone fill="black" width={15} height={20} />
                  </a>
                  <a href={`sms:${person.phoneNumber}`} className="p-1">
                    <Mail fill="black" stroke="white" width={20} height={20} />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
