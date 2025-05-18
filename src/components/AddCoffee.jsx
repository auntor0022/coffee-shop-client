import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    //   console.log(formData.entries());
    const newCoffee = Object.fromEntries(formData.entries());
    console.log(newCoffee);

    //   send coffees data in the db
    fetch("https://coffee-store-server-five-nu.vercel.app/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          console.log("after adding coffee", data);

          Swal.fire({
            title: "Coffee Added Successfully",
            icon: "success",
            draggable: true,
          });

          // form.reset();
        }
      });
  };

  return (
    <div className="container mx-auto px-[112px] ">
      <h3 className="text-3xl my-12 flex gap-4 items-center">
        <FaArrowLeft size={22} />
        Back to home
      </h3>
      <div className="text-center px-[82px] pt-16 bg-[#F4F3F0] mb-8">
        <h2 className="font-normal text-5xl mb-8">Add New Coffee</h2>
        <p className="font-normal text-lg text-[#1B1A1A70] w-3/4 mx-auto">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>

        <form action="" className="mt-4" onSubmit={handleAddCoffee}>
          <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-6">
            <div className="fieldset">
              <label className="label font-semibold text-xl">Name</label>
              <input
                type="text"
                className="input w-full text-base border-none"
                name="name"
                placeholder="Enter coffee name"
              />
              <label className="label font-semibold text-xl">Supplier</label>
              <input
                type="text"
                className="input w-full text-base border-none"
                name="supplier"
                placeholder="Enter coffee supplier"
              />
              <label className="label font-semibold text-xl">Price</label>
              <input
                type="text"
                name="price"
                className="input w-full text-base border-none"
                placeholder="Enter coffee price"
              />
            </div>
            <div className="fieldset">
              <label className="label font-semibold text-xl">Quantity</label>
              <input
                type="text"
                name="quantity"
                className="input w-full text-base border-none"
                placeholder="Enter coffee chef"
              />
              <label className="label font-semibold text-xl">Taste</label>
              <input
                type="text"
                name="taste"
                className="input w-full text-base border-none"
                placeholder="Enter coffee taste"
              />
              <label className="label font-semibold text-xl">Details</label>
              <input
                type="text"
                name="details"
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
              className="input w-full text-base border-none"
              placeholder="Enter your photo URL"
            />
          </div>
          <input
            type="submit"
            className="btn mt-4 mb-14 w-full bg-[#D2B48C] border border-[#331A15] text-[#331A15] text-2xl"
            value="Add Coffee"
          />
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
