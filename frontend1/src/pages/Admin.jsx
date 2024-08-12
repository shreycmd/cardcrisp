import React, { useEffect, useState } from 'react';
import axios from 'axios';



const Admin = () => {
  const [cards, setcards] = useState([]);
  const [editCard, setEditCard] = useState(null);
  const [newCard, setNewCard] = useState({
    type: '',
    question: '',
    answer: ''
  });

  useEffect(() => {
    const fetchFlashcards = async () => {
      try {
        const response = await axios.get('https://cardcrisp.onrender.com/admin/card');
        setcards(response.data);
      } catch (error) {
        console.error('Error fetching cards', error);
      }
    };

    fetchFlashcards();
  }, []);

  const handleAddCard = async () => {
    try {
      await axios.post('https://cardcrisp.onrender.com/admin/card', newCard);
      setNewCard({ type: '', question: '', answer: '' });
      setcards([...cards, newCard]);
    } catch (error) {
      console.error('Error adding flashcard', error);
    }
  };

  const handleEditCard = async () => {
    if (editCard) {
      try {
        await axios.put(`https://cardcrisp.onrender.com/admin/card/${editCard.id}`, editCard);
        setcards(
          cards.map(card =>(
            
            card.id === editCard.id ? editCard : card
          ))
        );
        setEditCard(null);
      } catch (error) {
        console.error('Error editing flashcard', error);
      }
    }
  };

  const handleDeleteCard = async (id) => {
    try {
      await axios.delete(`https://cardcrisp.onrender.com/admin/card/${id}`);
      setcards(cards.filter(card => card.id !== id));
    } catch (error) {
      console.error('Error deleting flashcard', error);
    }
  };

  return (
    <div className="admin ml-4 font-serif">
      <h1 className='text-7xl font-bold text-gray-700'>Admin Setting for CardCrisp</h1>
      
      <h2 className='text-xl font-semibold text-gray-700 mt-5'>Add Flashcard From here</h2>
      <div className='flex gap-5'>
        
        <input
          type="text"
          placeholder="Type"
          value={newCard.type}
          className='border-2'
          onChange={e => setNewCard({ ...newCard, type: e.target.value })}
        />
        <input
          type="text"
          className='border-2'
          placeholder="Question"
          value={newCard.question}
          onChange={e => setNewCard({ ...newCard, question: e.target.value })}
        />
        <input
          type="text"
          className='border-2'
          placeholder="Answer"
          value={newCard.answer}
          onChange={e => setNewCard({ ...newCard, answer: e.target.value })}
        />
        <button onClick={handleAddCard} className='border-2 bg-gray-600 text-white px-4 py-2 rounded-md'>Add Card</button>
      </div>
      
      
      {editCard && (
        <div>
          <h2 className='text-xl font-semibold text-gray-700 mt-5'>Edit Flashcard</h2>
          <div className='flex gap-4'><input
          type="text"
          placeholder="Type"
          className='border-sky-200 border-2'
          value={editCard.type}
          onChange={e => setEditCard({ ...editCard, type: e.target.value })}
        />
        <input
          type="text"
          className='border-sky-200 border-2'
          placeholder="Question"
          value={editCard.question}
          onChange={e => setEditCard({ ...editCard, question: e.target.value })}
        />
        <input
          type="text"
          className='border-sky-200 border-2'
          placeholder="Answer"
          value={editCard.answer}
          onChange={e => setEditCard({ ...editCard, answer: e.target.value })}
        />
        <button onClick={handleEditCard} className='border-2 bg-gray-600 text-white px-4 py-2 rounded-md'>Save Changes</button></div>
        </div>
      )}
      
      
      <h2 className='mt-5 text-xl font-semibold text-gray-700 '>Flashcards Details</h2>
      <div className="relative overflow-x-auto  mt-5">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              
              <th scope="col" className="px-6 py-3">
                type
              </th>
              <th scope="col" className="px-6 py-3">
               QUESTION
              </th>
              <th scope="col" className="px-6 py-3">
                Answer
              </th>
              
            </tr>
          </thead>
          <tbody>
            {cards.map(card=>(
              
               <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {card.type}
        </th> 
        <td className="px-6 py-4">{card.question}</td>
        <td className="px-6 py-4">{card.answer}</td>
    
        <td> <button onClick={() => setEditCard(card)}  className='border-2 bg-gray-600 text-white px-4 py-2 rounded-md'>Edit</button>
        <button onClick={() => handleDeleteCard(card.id)}  className='border-2 bg-gray-600 text-white px-4 py-2 rounded-md'>Delete</button></td></tr>
             

            ))}
            </tbody>
            
          
        </table>
      </div>
      
    </div>
  );
};

export default Admin;