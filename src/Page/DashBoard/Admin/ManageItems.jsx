import { FaTrash } from "react-icons/fa";
import Swal from 'sweetalert2';
import SectionTitle from "../../../Sheared/SectionTitle";
import useAxiosSecure from "../../../hooks/UseAxiosSecure";
import useMenu from "../../../hooks/useMenu";

const ManageItems = () => {
  const [menu, ,refetch] = useMenu(); //Ata Array tai index hisaba asba ta meddile a {,} ta dia hoisa
const [axiosSecure]= useAxiosSecure()
  const handleDelete = item =>{
Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
   axiosSecure.delete(`/menu/${item._id}`)
   .then(res=>{
    console.log('deleted res', res.data)
   if(res.data.deletedCount > 0){
     refetch()
     Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
   }
   
   })
  }
});
  }


    return (
        <div className="w-full">
              <SectionTitle
        subHeading="Manage All Items"
        heading="Hurry Up"
      > </SectionTitle>
      {/* table start */}
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
     
        </th>
        <th>Item</th>
        <th>Category</th>
        <th>Price</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {
        menu.map((item,index) =>    <tr item={item._id}>
        <th>
         {index+1}
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{item.name}</div>
            </div>
          </div>
        </td>
        <td>
{item.category}
        </td>
        <td>${item.price}</td>
        <th>
          <button className="btn btn-ghost btn-xs">Update</button>
        </th>
              <td>
                    <button onClick={() => handleDelete(item)} className="btn btn-error  text-white"><FaTrash /></button>
                  </td>
      </tr>)
      }
  


  
    </tbody>

    
  </table>
</div>
        </div>
    );
};

export default ManageItems;