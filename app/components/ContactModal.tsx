import React from 'react';
import { Phone, Mail } from 'lucide-react';
import Modal from './Modal';

const ContactModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const CONTEXT_LIST = [
    { title: '신랑', name: '이등록', phoneNumber: '010-9759-1229' },
    { title: '신부', name: '유하진', phoneNumber: '010-8893-4534' },
    { title: '', name: '', phoneNumber: '' },
    { title: '신부 아버지', name: '유종표', phoneNumber: '010-2305-9111' },
    { title: '신랑 어머니', name: '최재숙', phoneNumber: '010-7224-5116' },
    { title: '신부 어머니', name: '송경란', phoneNumber: '010-7275-2222' },
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="grid grid-cols-2 gap-4 font_gowun_dodum">
        {CONTEXT_LIST.map((person, index) => (
          <div key={index} className="text-center flex flex-col gap-1">
            <p className="text-sm">{person.title}</p>
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
    </Modal>
  );
};

export default ContactModal;
