import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useCart from '../../../hooks/useCart';




const MyCart = () => {
  const [cart,refetch] = useCart();
  console.log(cart);
  const total = cart.reduce((sum, item) => item.price + sum, 0)
const price = parseFloat(total.toFixed(2))
  const handleDelete = item => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${item._id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              refetch()
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
      }
    })
  }

  return (
    <div className='w-full'>
      <div className='uppercase font-semibold h-[60px] flex justify-evenly items-center'>
        <h3 className='text-3xl'>Total Items: {cart.length}</h3>
        <h3 className='text-3xl'>Total price: {price}</h3>
        <Link to="/dashboard/payment">
            <button className='btn btn-warning btn-xl'>PAY</button>
        </Link>
      
      </div>
      {/* Table  */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                #
              </th>
              <th>Food</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>

            {
              cart.map((item, index) =>
                <tr key={item._id}>
                  <th>
                    {index + 1}
                  </th>
                  <td>

                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>


                  </td>
                  <td>
                    {item.name}
                  </td>
                  <td >${item.price}</td>
                  <td>
                    <button onClick={() => handleDelete(item)} className="btn btn-error  text-white"><FaTrash /></button>
                  </td>
                </tr>
              )
            }

          </tbody>


        </table>
      </div>
    </div>
  );
};

export default MyCart;