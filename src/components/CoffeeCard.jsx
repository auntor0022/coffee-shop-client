import React from "react";
import { FaRegEye } from "react-icons/fa";
import { MdEdit, MdOutlineDeleteOutline } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, photo, quantity, price } = coffee;

  const handleDelete = (_id) => {
    console.log(_id);

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          // delete in db
          fetch(
            `https://coffee-store-server-five-nu.vercel.app/coffees/${_id}`,
            {
              method: "DELETE",
            }
          )
            .then((res) => res.json())
            .then((data) => {
              // console.log("after delete", data);
              if (data.deletedCount) {
                swalWithBootstrapButtons.fire({
                  title: "Deleted!",
                  text: "Your Coffee has been deleted.",
                  icon: "success",
                });
                const remainingCoffee = coffees.filter(
                  (cof) => cof._id !== _id
                );
                setCoffees(remainingCoffee);
              }
            });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error",
          });
        }
      });
  };

  return (
    <div className="flex justify-around items-center bg-[#F5F4F1] rounded-xl mt-12">
      <div>
        <img src={photo} alt="" className="py-8" />
      </div>
      <div>
        <h3>Name: {name}</h3>
        <h3>Quantity: {quantity}</h3>
        <h3>Price: {price}</h3>
        <Link to={`/coffee/${_id}`}>
          <button className="btn bg-red-500 text-white">View More</button>
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        <button className="btn bg-[#D2B48C] text-white rounded-lg">
          <FaRegEye size={20} />
        </button>
        <Link to={`/updateCoffee/${_id}`}>
          <button className="btn bg-[#3C393B] text-white rounded-lg">
            <MdEdit size={20} />
          </button>
        </Link>
        <button
          onClick={() => handleDelete(_id)}
          className="btn bg-[#EA4744] text-white rounded-lg"
        >
          <MdOutlineDeleteOutline size={20} />
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
