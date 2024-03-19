import React from 'react';

const ListProductOnly = ({ data, handleAddProduct }) => {
  return (
    <div className="grid grid-cols-5 gap-5">
      {data.map((item) => {
        return (
          <div
            key={item.id}
            className="max-w-sm rounded overflow-hidden shadow-lg border-white cursor-pointer"
          >
            <img
              className="w-full"
              src={item.hinhAnh}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{item.name}</div>
              <p className="text-gray-700 text-base">{item.moTa}</p>
              <button
                onClick={() => {
                  handleAddProduct(item);
                }}
                className="bg-yellow-300 text-white rounded cursor-pointer"
              >
                Thêm
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListProductOnly;
