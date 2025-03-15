import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Navbar from '../../assets/Navbar/Navbar.jsx';
import { createPurchaseGoal } from '../../api/api';
import { useNavigate } from 'react-router-dom';

const CreateGroupPage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [targetAmount, setTargetAmount] = useState('');
  const [amountPerPerson, setAmountPerPerson] = useState('');
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productUnitPrice, setProductUnitPrice] = useState('');
  const [productBulkPrice, setProductBulkPrice] = useState('');
  const [productQuantity, setProductQuantity] = useState('');
  const [productImage, setProductImage] = useState(null);
  const [groupLink, setGroupLink] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalType, setModalType] = useState('success'); // 'success' or 'error'

  const handleProductImageChange = (e) => {
    setProductImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const goalData = {
          title,
          description,
          target_amount: targetAmount,
          amount_per_person: amountPerPerson,
          product_name: productName,
          product_description: productDescription,
          product_unit_price: productUnitPrice,
          product_bulk_price: productBulkPrice,
          product_quantity: productQuantity,
          product_image: productImage,
          group_link: groupLink,
          start_date: startDate ? startDate.toISOString() : '',
          end_date: endDate ? endDate.toISOString() : '',
        };

        await createPurchaseGoal(goalData);

        setModalMessage('Purchase goal created successfully!');
        setModalType('success');
        setIsModalOpen(true);
        //navigate('/groups') // uncomment this line to navigate to group page after success
      } catch (error) {
        console.error('Error creating purchase goal:', error);
        setModalMessage(`Error creating purchase goal: ${error.message}`);
        setModalType('error');
        setIsModalOpen(true);
      }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalMessage(''); // Clear the message when closing
    setModalType('success');
    //navigate('/groups') // uncomment this line to navigate to group page after success
  };

  return (
    <div className="min-h-screen bg-gray-100 relative">
      {/* Modal for Success/Error */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <h3 className={`text-lg font-semibold ${modalType === 'success' ? 'text-green-600' : 'text-red-600'} mb-4`}>
              {modalType === 'success' ? 'Success!' : 'Error!'}
            </h3>
            <p className="mb-4">{modalMessage}</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="flex items-center justify-center p-4 pt-16 pb-18">
        <div className="bg-white rounded-2xl shadow-lg w-full max-w-4xl p-10">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
            Create a New Purchase Goal
          </h2>

          <form onSubmit={handleSubmit} encType="multipart/form-data" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Form fields (same as before) */}
            <div className="md:col-span-1">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                Title
              </label>
              <input
                type="text"
                id="title"
                className="mt-1 p-3 w-full rounded-md bg-gray-50 border-transparent focus:ring-rose-500 focus:border-rose-500"
                placeholder="e.g., Group Purchase Goal"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="md:col-span-1">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                id="description"
                rows="4"
                className="mt-1 p-3 w-full rounded-md bg-gray-50 border-transparent focus:ring-rose-500 focus:border-rose-500"
                placeholder="Tell us about the purchase goal..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="md:col-span-1">
              <label htmlFor="targetAmount" className="block text-sm font-medium text-gray-700 mb-1">
                Target Amount
              </label>
              <input
                type="number"
                id="targetAmount"
                className="mt-1 p-3 w-full rounded-md bg-gray-50 border-transparent focus:ring-rose-500 focus:border-rose-500"
                placeholder="e.g., 1000"
                value={targetAmount}
                onChange={(e) => setTargetAmount(e.target.value)}
              />
            </div>

            <div className="md:col-span-1">
              <label htmlFor="amountPerPerson" className="block text-sm font-medium text-gray-700 mb-1">
                Amount Per Person (Optional)
              </label>
              <input
                type="number"
                id="amountPerPerson"
                className="mt-1 p-3 w-full rounded-md bg-gray-50 border-transparent focus:ring-rose-500 focus:border-rose-500"
                placeholder="e.g., 100"
                value={amountPerPerson}
                onChange={(e) => setAmountPerPerson(e.target.value)}
              />
            </div>

            <div className="md:col-span-1">
              <label htmlFor="productName" className="block text-sm font-medium text-gray-700 mb-1">
                Product Name
              </label>
              <input
                type="text"
                id="productName"
                className="mt-1 p-3 w-full rounded-md bg-gray-50 border-transparent focus:ring-rose-500 focus:border-rose-500"
                placeholder="e.g., Laptop"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </div>

            <div className="md:col-span-1">
              <label htmlFor="productDescription" className="block text-sm font-medium text-gray-700 mb-1">
                Product Description
              </label>
              <textarea
                id="productDescription"
                rows="4"
                className="mt-1 p-3 w-full rounded-md bg-gray-50 border-transparent focus:ring-rose-500 focus:border-rose-500"
                placeholder="e.g., High-performance laptop..."
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="md:col-span-1">
              <label htmlFor="productUnitPrice" className="block text-sm font-medium text-gray-700 mb-1">
                Product Unit Price
              </label>
              <input
                type="number"
                id="productUnitPrice"
                className="mt-1 p-3 w-full rounded-md bg-gray-50 border-transparent focus:ring-rose-500 focus:border-rose-500"
                placeholder="e.g., 1200"
                value={productUnitPrice}
                onChange={(e) => setProductUnitPrice(e.target.value)}
              />
            </div>

            <div className="md:col-span-1">
              <label htmlFor="productBulkPrice" className="block text-sm font-medium text-gray-700 mb-1">
                Product Bulk Price (Optional)
              </label>
              <input
                type="number"
                id="productBulkPrice"
                className="mt-1 p-3 w-full rounded-md bg-gray-50 border-transparent focus:ring-rose-500 focus:border-rose-500"
                placeholder="e.g., 1000"
                value={productBulkPrice}
                onChange={(e) => setProductBulkPrice(e.target.value)}
              />
            </div>

            <div className="md:col-span-1">
              <label htmlFor="productQuantity" className="block text-sm font-medium text-gray-700 mb-1">
                Product Quantity
              </label>
              <input
                type="number"
                id="productQuantity"
                className="mt-1 p-3 w-full rounded-md bg-gray-50 border-transparent focus:ring-rose-500 focus:border-rose-500"
                placeholder="e.g., 10"
                value={productQuantity}
                onChange={(e) => setProductQuantity(e.target.value)}
              />
            </div>

            <div className="md:col-span-1">
              <label htmlFor="productImage" className="block text-sm font-medium text-gray-700 mb-1">
                Product Image (Optional)
              </label>
              <input
                type="file"
                id="productImage"
                className="mt-1 p-3 w-full rounded-md bg-gray-50 border-transparent focus:ring-rose-500 focus:border-rose-500"
                onChange={handleProductImageChange}
              />
            </div>

            <div className="md:col-span-1">
              <label htmlFor="groupLink" className="block text-sm font-medium text-gray-700 mb-1">
                Group Link (Optional)
              </label>
              <input
                type="text"
                id="groupLink"
                className="mt-1 p-3 w-full rounded-md bg-gray-50 border-transparent focus:ring-rose-500 focus:border-rose-500"
                placeholder="e.g., https://example.com/group"
                value={groupLink}
                onChange={(e) => setGroupLink(e.target.value)}
              />
            </div>

            <div className="md:col-span-1">
              <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-1">
                Start Date
              </label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="mt-1 p-3 w-full rounded-md bg-gray-50 border-transparent focus:ring-rose-500 focus:border-rose-500"
                placeholderText="Select start date"
                dateFormat="dd/MM/yyyy"
              />
            </div>

            <div className="md:col-span-1">
              <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-1">
                End Date (Optional)
              </label>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                className="mt-1 p-3 w-full rounded-md bg-gray-50 border-transparent focus:ring-rose-500 focus:border-rose-500"
                placeholderText="Select end date"
                dateFormat="dd/MM/yyyy"
                minDate={startDate}
              />
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-rose-500 text-white p-3 rounded-md hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-400"
              >
                Create Purchase Goal
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-20">
        <Navbar />
      </div>
    </div>
  );
};

export default CreateGroupPage;
