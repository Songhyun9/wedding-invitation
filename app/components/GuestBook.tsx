import { X } from 'lucide-react';
import React, { useState, useEffect } from 'react';

interface GuestbookEntry {
  id: number;
  name: string;
  content: string;
  date: string;
}

const GuestBook: React.FC = () => {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [newEntry, setNewEntry] = useState({ name: '', content: '' });
  const [isWriting, setIsWriting] = useState(false);

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    try {
      const response = await fetch('/api/guestbook');
      if (response.ok) {
        const data = await response.json();
        setEntries(data);
      } else {
        console.error('Failed to fetch entries');
      }
    } catch (error) {
      console.error('Error fetching entries:', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewEntry((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (newEntry.name && newEntry.content) {
      try {
        const response = await fetch('/api/guestbook', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newEntry),
        });
        if (response.ok) {
          await fetchEntries();
          setNewEntry({ name: '', content: '' });
          setIsWriting(false);
        } else {
          console.error('Failed to submit entry');
        }
      } catch (error) {
        console.error('Error submitting entry:', error);
      }
    }
  };

  return (
    <div className="pt-10 mb-16 flex flex-col gap-10 font_gowun_dodum">
      <p className="font_parisienne text-[#d099a1] tracking-[.20em] text-center">Guest Book</p>
      <p className="font-extrabold text-lg w-full text-center">방명록</p>

      {isWriting && (
        <form onSubmit={handleSubmit} className="border border-[#eeeeee] rounded px-8 pt-6 pb-8 m-10">
          <X
            size={20}
            className="mb-4 float-end cursor-pointer"
            onClick={() => {
              setIsWriting(!isWriting);
              setNewEntry({ name: '', content: '' });
            }}
          />
          <div className="mb-4">
            <input
              type="text"
              name="name"
              value={newEntry.name}
              onChange={handleInputChange}
              placeholder="이름"
              className="border-[#eeeeee] text-sm appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <textarea
              name="content"
              value={newEntry.content}
              onChange={handleInputChange}
              placeholder="내용"
              className="text-sm appearance-none border border-[#eeeeee] rounded w-full py-2 px-3  mb-3 leading-tight focus:outline-none focus:shadow-outline h-24"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-[#f9f9f9] rounded-sm text-black font-bold py-2 px-4 border-[#eeeeee] border w-full"
            >
              글쓰기
            </button>
          </div>
        </form>
      )}
      {!isWriting && (
        <div className="w-full px-10">
          <button
            onClick={() => setIsWriting(!isWriting)}
            className=" mb-4 border border-[#eeeeee] bg-[#f9f9f9]  font-bold py-2 px-4 rounded-md focus:outline-none  w-full"
          >
            글쓰기
          </button>

          <div className="space-y-4">
            {entries.map((entry) => (
              <div key={entry.id} className="bg-white border-[#eeeeee] border rounded-md px-8 pt-6 pb-8 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold">{entry.name}</h3>
                  <span className="text-sm ">{entry.date}</span>
                </div>
                <p className="">{entry.content}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GuestBook;
