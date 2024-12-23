import React from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import SectionTitle from '../../../Sheared/SectionTitle';
import useAxiosSecure from '../../../hooks/UseAxiosSecure';

//imageBB Image Hosting
const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
//imageBB Image Hosting Process End

const AdItems = () => {

  const [axiosSecure] = useAxiosSecure();

  // react-from-hook
  const { register, handleSubmit,reset, formState: { errors } } = useForm();


  //Client Site Image Hosting Send this Url 
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
  //



  const onSubmit = data => {

    // Image Procees And Send Client Own File to Image 
    const formData = new FormData();
    formData.append('image', data.image[0])
    fetch(img_hosting_url, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(imgResponse => {
        // 16  line url data (imgResponse) catch this function 
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const { name, price, category, recipe } = data;
          const newItem = { name, price: parseFloat(price), category, recipe, image: imgURL }
          console.log(newItem);
          //Server Site Connect and Data post {menu} url process
          axiosSecure.post('/menu', newItem)
            .then(data => {
              console.log('after posting new menu item', data.data)
              if (data.data.insertedId) {
                reset()
                Swal.fire({
                  position: "top-center",
                  icon: "success",
                  title: "Menu Item Added Success Fully",
                  showConfirmButton: false,
                  timer: 1500
                });
              }
            })
          //Server Site Connect and Data post {menu} url process end


        }
      })
    console.log(data)
  }
  //
  console.log(errors);
  // react-from-hook function working process is end ...
  return (
    <div className='w-full px-10'>
      <SectionTitle
        subHeading="What's new"
        heading="Add an item"
      > </SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* name */}
        <div className="form-control w-full  ">
          <label className="label">
            <span className="label-text">Recipe Name</span>

          </label>
          <input type="text" placeholder="Recipe Name"
            {...register("name", { required: true, maxLength: 120 })}
            className="input input-bordered w-full " />
        </div>
        <div className='flex'>
          {/* category */}
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Category</span>

            </label>
            <select
              {...register("category", { required: true })}
              className="select select-bordered"
              defaultValue="Pick one"
            >
              <option disabled>Pick one</option>
              <option>pizza</option>
              <option>soup</option>
              <option>salad</option>
              <option>barger</option>
              <option>drink</option>
            </select>

          </div>
          {/* PRICE */}
          <div className="form-control w-full ml-4">
            <label className="label">
              <span className="label-text">Price</span>

            </label>
            <input
              {...register("price", { required: true })}
              type="number" placeholder="Type here" className="input input-bordered w-full" />
          </div>
        </div>
        {/* big text area */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Recipe Details</span>
          </label>
          <textarea
            {...register("recipe", { required: true })}
            placeholder="Bio" className="textarea textarea-bordered textarea-lg w-full " ></textarea>
        </div>
        {/* Image File Select */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Items Image</span>
          </label>
          <input
            {...register("image", { required: true })}
            type="file" className="file-input file-input-bordered w-full" />

        </div>
        <input className='btn btn-ml mt-2' type="submit" value="Add Item" />
      </form>
    </div>
  );
};

export default AdItems;