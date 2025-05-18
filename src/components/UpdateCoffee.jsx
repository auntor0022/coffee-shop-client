import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const { _id, name, quantity, supplier, taste, details, photo, price } =
    useLoaderData();

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    //   console.log(formData.entries());
    const updatedCoffee = Object.fromEntries(formData.entries());
    console.log(updatedCoffee);

    //   send updated coffee in db
    fetch(`https://coffee-store-server-five-nu.vercel.app/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Coffee Update successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="container mx-auto px-[112px] ">
      <Link to={"/"}>
        <h3 className="text-3xl my-12 flex gap-4 items-center">
          <FaArrowLeft size={22} />
          Back to home
        </h3>
      </Link>
      <div className="text-center px-[82px] pt-16 bg-[#F4F3F0] mb-8">
        <h2 className="font-normal text-5xl mb-8">Update Coffee</h2>

        <form action="" className="mt-4" onSubmit={handleUpdateCoffee}>
          <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-6">
            <div className="fieldset">
              <label className="label font-semibold text-xl">Name</label>
              <input
                type="text"
                className="input w-full text-base border-none"
                name="name"
                defaultValue={name}
                placeholder="Enter coffee name"
              />
              <label className="label font-semibold text-xl">Supplier</label>
              <input
                type="text"
                className="input w-full text-base border-none"
                name="supplier"
                defaultValue={supplier}
                placeholder="Enter coffee supplier"
              />
              <label className="label font-semibold text-xl">Price</label>
              <input
                type="text"
                name="price"
                defaultValue={price}
                className="input w-full text-base border-none"
                placeholder="Enter coffee price"
              />
            </div>
            <div className="fieldset">
              <label className="label font-semibold text-xl">Quantity</label>
              <input
                type="text"
                name="quantity"
                defaultValue={quantity}
                className="input w-full text-base border-none"
                placeholder="Enter coffee chef"
              />
              <label className="label font-semibold text-xl">Taste</label>
              <input
                type="text"
                name="taste"
                defaultValue={taste}
                className="input w-full text-base border-none"
                placeholder="Enter coffee taste"
              />
              <label className="label font-semibold text-xl">Details</label>
              <input
                type="text"
                name="details"
                defaultValue={details}
                className="input w-full text-base border-none"
                placeholder="Enter coffee details"
              />
            </div>
          </div>
          <div className="fieldset">
            <label className="label font-semibold text-xl">Photo</label>
            <input
              type="text"
              name="photo"
              defaultValue={photo}
              className="input w-full text-base border-none"
              placeholder="Enter your photo URL"
            />
          </div>
          <input
            type="submit"
            className="btn mt-4 mb-14 w-full bg-[#D2B48C] border border-[#331A15] text-[#331A15] text-2xl"
            value="Update Coffee"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
